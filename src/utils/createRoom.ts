import "server-only";
import { z } from "zod";

const CreateRoomResponseSchema = z.object({
  message: z.string(),
  data: z.object({
    roomId: z.string(),
  }),
});

export const createRoom = async (title: string) => {
  const { signal } = new AbortController();

  const options = {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.HUDDLE_API_KEY || "",
    },
    body: JSON.stringify({
      title: "Axit",
      roomLocked: false,
      appData: { description: "hi there peeps" },
    }),
  };

  const response = await fetch(
    "https://api.huddle01.com/api/v1/create-room",
    options
  );

  const res = await response.json();

  const parsedResult = CreateRoomResponseSchema.safeParse(res);

  if (!parsedResult.success) {
    throw new Error(parsedResult.error.message);
  }

  return parsedResult.data.data.roomId;
};
