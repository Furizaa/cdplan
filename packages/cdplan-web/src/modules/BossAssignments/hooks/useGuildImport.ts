import { MAX_LEVEL } from "@cdplan/db";
import { useEffect, useRef, useState } from "react";
import { DBC } from "types";

type UseGuildImport = [
  DBC.API.AsyncError,
  (params: DBC.API.GuildRequestBody, rankFilter: number, cb: (members: DBC.API.GuildMember[]) => void) => void,
  boolean,
  number
];

const QUEUE_GRACE_PERIOD_MS = 1250;
const QUEUE_RETRY_PERIOD_MS = 3000;
const QUEUE_RETRY_COUNT = 3;

export default function useGuildImport(): UseGuildImport {
  const timeoutRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [queueWaitMs, setQueueWaitMs] = useState(0);
  const [error, setError] = useState<DBC.API.AsyncError>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const handleImport = (
    json: DBC.API.Result<DBC.API.GuildRequestResponse>,
    rankFilter: number
  ): DBC.API.GuildMember[] | undefined => {
    if (json.data) {
      setIsLoading(false);
      return json.data.guild.members
        .filter((member) => member.rank <= rankFilter && member.character.level === MAX_LEVEL)
        .map((member) => member.character);
    }

    if (json.error) {
      setIsLoading(false);
      setError(json.error);
    }
    return undefined;
  };

  const checkQueueStatus = async (
    token: string,
    tryCount: number,
    cb: (members: DBC.API.GuildMember[]) => void,
    rankFilter: number
  ) => {
    const result = await fetch(`/api/proxy/queue?token=${token}`);
    const json = (await result.json()) as DBC.API.QueuedLookupResult<DBC.API.Result<DBC.API.GuildRequestResponse>>;
    if (json.status === "DONE") {
      setQueueWaitMs(0);
      const members = handleImport(json.payload, rankFilter);
      if (members) {
        cb(members);
      }

      return;
    }
    if (json.status === "QUEUE" && tryCount <= QUEUE_RETRY_COUNT) {
      setQueueWaitMs(QUEUE_RETRY_PERIOD_MS);
      timeoutRef.current = setTimeout(
        () => checkQueueStatus(token, tryCount + 1, cb, rankFilter),
        QUEUE_RETRY_PERIOD_MS
      );
      return;
    }
    setQueueWaitMs(0);
    setIsLoading(false);
    setError({ code: 500, text: "Error loading character: Queue didn\t respond." });
  };

  const loadGuild = async (
    params: DBC.API.GuildRequestBody,
    rankFilter: number,
    cb: (members: DBC.API.GuildMember[]) => void
  ) => {
    if (isLoading) {
      return;
    }

    setError(null);
    setIsLoading(true);
    setQueueWaitMs(0);

    const queueBody = {
      type: "guild",
      params,
    };

    const result = await fetch(`/api/proxy/queue`, {
      method: "POST",
      body: JSON.stringify(queueBody),
    });
    const json = (await result.json()) as DBC.API.QueuedResult<DBC.API.GuildRequestResponse>;

    if ("token" in json) {
      const queueTime = json.waitTimeSeconds * 1000 + QUEUE_GRACE_PERIOD_MS;
      setQueueWaitMs(queueTime);
      timeoutRef.current = setTimeout(() => checkQueueStatus(json.token, 0, cb, rankFilter), queueTime);
    } else {
      setError({ code: 500, text: "Error loading character: Queue is offline." });
    }
  };

  return [error, loadGuild, isLoading, queueWaitMs];
}
