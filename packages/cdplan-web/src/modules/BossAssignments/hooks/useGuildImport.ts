import { useEffect, useRef, useState } from "react";
import { MANIFEST } from "@cdplan/cloud";
import { API } from "@cdplan/db/db/types";

type UseGuildImport = [API.AsyncError, (params: API.GuildRequestBody, cb: () => void) => void, boolean, number];

const QUEUE_GRACE_PERIOD_MS = 1250;
const QUEUE_RETRY_PERIOD_MS = 3000;
const QUEUE_RETRY_COUNT = 3;

export default function useGuildImport(): UseGuildImport {
  const timeoutRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [queueWaitMs, setQueueWaitMs] = useState(0);
  const [error, setError] = useState<API.AsyncError>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    },
    []
  );

  const handleImport = (json: API.Result<API.GuildRequestResponse>): boolean => {
    if (json.data) {
      setIsLoading(false);
      return true;
    }

    if (json.error) {
      setIsLoading(false);
      setError(json.error);
    }
    return false;
  };

  const checkQueueStatus = async (token: string, tryCount: number, cb: () => void) => {
    const result = await fetch(`${MANIFEST.bnetGatewayEndpoint}queue?token=${token}`);
    const json = (await result.json()) as API.QueuedLookupResult<API.Result<API.GuildRequestResponse>>;
    if (json.status === "DONE") {
      setQueueWaitMs(0);
      if (handleImport(json.payload)) {
        cb();
      }

      return;
    }
    if (json.status === "QUEUE" && tryCount <= QUEUE_RETRY_COUNT) {
      setQueueWaitMs(QUEUE_RETRY_PERIOD_MS);
      timeoutRef.current = setTimeout(() => checkQueueStatus(token, tryCount + 1, cb), QUEUE_RETRY_PERIOD_MS);
      return;
    }
    setQueueWaitMs(0);
    setIsLoading(false);
    setError({ code: 500, text: "Error loading character: Queue didn\t respond." });
  };

  const loadGuild = async (params: API.GuildRequestBody, cb: () => void) => {
    if (isLoading) {
      return;
    }

    setError(null);
    setIsLoading(true);
    setQueueWaitMs(0);

    const queueBody = {
      type: "character",
      params,
    };

    const result = await fetch(`${MANIFEST.bnetGatewayEndpoint}queue`, {
      method: "POST",
      body: JSON.stringify(queueBody),
    });
    const json = (await result.json()) as API.QueuedResult<API.GuildRequestResponse>;

    if ("token" in json) {
      const queueTime = json.waitTimeSeconds * 1000 + QUEUE_GRACE_PERIOD_MS;
      setQueueWaitMs(queueTime);
      timeoutRef.current = setTimeout(() => checkQueueStatus(json.token, 0, cb), queueTime);
    } else {
      setError({ code: 500, text: "Error loading character: Queue is offline." });
    }
  };

  return [error, loadGuild, isLoading, queueWaitMs];
}
