import { LEVEL_THEMES, THEME_BACKGROUNDS } from "@/constants";
import { useRouter } from "next/navigation";
import React from "react";

const CreateOrJoinRoom = () => {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: THEME_BACKGROUNDS[LEVEL_THEMES.BLUE],
      }}
      className="absolute inset-0 grid place-items-center"
    >
      <button type="button" onClick={() => router.push("/room")}>
        Create Room
      </button>
    </div>
  );
};

export default CreateOrJoinRoom;
