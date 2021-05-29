const fetch = require("node-fetch");

module.exports = async function getBNetToken({ origin }) {
  const authString = Buffer.from(`${process.env.BATTLENET_CLIENT_ID}:${process.env.BATTLENET_CLIENT_SECRET}`).toString(
    "base64"
  );

  const response = await fetch(`https://${origin}.battle.net/oauth/token?grant_type=client_credentials`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
    },
  });

  const responseData = await response.json();

  return responseData.access_token;
};
