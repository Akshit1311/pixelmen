import { useEffect, useRef } from "react";
import { useRoom } from "@huddle01/react/hooks";

const useMeeting = (roomId: string, accessToken: string) => {
  const isLoading = useRef(false);

  const { joinRoom, leaveRoom, state } = useRoom({
    onJoin: () => {
      console.log("Joined the room");
    },
    onLeave: () => {
      console.log("Left the room");
    },
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (roomId && accessToken && !isLoading.current) {
      console.log("Joining room", { roomId, accessToken });

      joinRoom({ roomId, token: accessToken });
      isLoading.current = true;
    } else {
      console.log("No room id or access token or isLoading", {
        roomId,
        accessToken,
        isLoading: isLoading.current,
      });
    }
  }, []);

  return { state };
};

export default useMeeting;
