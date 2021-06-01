import { MANIFEST } from "@cdplan/cloud";
import proxyMiddleware from "next-http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return proxyMiddleware(req, res, {
    target: MANIFEST.bnetGatewayEndpoint,
    pathRewrite: {
      "^/api/proxy/": "/",
    },
  });
};
