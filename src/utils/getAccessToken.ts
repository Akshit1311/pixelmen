import { cache } from "react";
import "server-only";

import { AccessToken, Role } from "@huddle01/server-sdk/auth";

export const preload = (roomId: string) => {
  void getAccessToken(roomId);
};

export const getAccessToken = cache(async (roomId: string) => {
  console.log(roomId);

  const accessToken = new AccessToken({
    apiKey: process.env.HUDDLE_API_KEY || "",
    roomId: roomId,
    role: Role.HOST,
    permissions: {
      admin: true,
      canConsume: true,
      canProduce: true,
      canProduceSources: {
        cam: true,
        mic: true,
        screen: true,
      },
      canRecvData: true,
      canSendData: true,
      canUpdateMetadata: true,
    },
    options: {
      metadata: {
        // you can add any custom attributes here which you want to associate with the user
        walletAddress: "axit.eth",
      },
    },
  });

  return accessToken.toJwt();
});
