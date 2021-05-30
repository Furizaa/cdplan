import { MANIFEST } from "@cdplan/cloud";
import proxyMiddleware from "next-http-proxy-middleware";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  proxyMiddleware(req, res, {
    target: MANIFEST.bnetGatewayEndpoint,
    changeOrigin: true,
    pathRewrite: {
      "^/api/proxy/": "/",
    },
  });
};
