import { Lambda } from "aws-sdk";
import fetch from "node-fetch";
import { QueuePayloadInGuild } from "./types";

export const handler = async (event: QueuePayloadInGuild["params"]): Promise<any> => {
  console.log("Guild Proxy Request", event);

  const lambda = new Lambda();

  const { region, name, realm } = event;

  const tokenResponse = await lambda
    .invoke({
      FunctionName: process.env.TOKEN_FUNCTION_NAME ?? "",
      Payload: JSON.stringify({ ...event }),
    })
    .promise();

  const bearer = JSON.parse((tokenResponse?.Payload as string) ?? "");

  const guildPromise = fetch(`https://${region}.api.blizzard.com/data/wow/guild/${realm}/${name}/roster`, {
    headers: { authorization: `Bearer ${bearer}`, "battlenet-namespace": `profile-${region}` },
  });

  const [guildResponse] = await Promise.all([guildPromise]);

  if (guildResponse.status !== 200) {
    return {
      data: null,
      error: { code: guildResponse.status, text: await guildResponse.text() },
    };
  }

  const guildJson = await guildResponse.json();

  return {
    data: { guild: guildJson },
    error: null,
  };
};
