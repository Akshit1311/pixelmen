import { createRoom } from "@/utils/createRoom";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const roomId = await createRoom("Axit");
  console.log({ roomId });

  redirect(`/room/${roomId}`);
}

// Uncomment to stop getting cached result
// export const dynamic = "force-dynamic";
