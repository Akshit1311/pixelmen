import Game from "@/components/Game";
import Meeting from "@/components/Huddle01/Meeting";
import { getAccessToken } from "@/utils/getAccessToken";
type TParams = {
  params: {
    roomId: string;
  };
};

export default async function Home({ params: { roomId } }: TParams) {
  const accessToken = await getAccessToken(roomId);

  return (
    <>
      <Meeting roomId={roomId} accessToken={accessToken} />
      <Game />
    </>
  );
}

// Otherwise, get cached access token
export const dynamic = "force-dynamic";
