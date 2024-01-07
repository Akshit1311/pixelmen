import LevelState, { TLevelStateData } from "@/classes/LevelState";
import {
  CELL_SIZE,
  HELPER_OUTLINE,
  LEVEL_THEMES,
  THEME_BACKGROUNDS,
} from "@/constants";
import { cn } from "@/utils/helpers";
import React, { useEffect, useState } from "react";
import LevelBgTilesLayer from "./LevelBgTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import { useRoom } from "@huddle01/react/hooks";

const RenderLevel = () => {
  const [level, setLevel] = useState<TLevelStateData | null>(null);
  const { room, state } = useRoom();

  useEffect(() => {
    const levelState = new LevelState("1", (data) => {
      // console.log("Level data", data);
      setLevel(data);
    });

    setLevel(levelState.getState());

    return () => levelState.destroy();
  }, []);

  if (!level) {
    console.log("No level data");
    return null;
  }

  return (
    <div
      className="absolute inset-0 grid place-items-center"
      style={{
        backgroundColor: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className="absolute top-2 left-2 ">
        <div>
          Room Id: <span className="font-bold">{room.roomId}</span>
        </div>
        <div>
          Room State: <span className="font-bold">{state}</span>
        </div>
      </div>

      {/* Game Screen */}
      <div
        className={cn(
          "h-44 w-44 scale-[2] md:scale-[3] lg:scale-[3.5] xl:scale-[3.75] 2xl:scale-[4]",
          HELPER_OUTLINE && "outline outline-red-500"
        )}
      >
        <LevelBgTilesLayer level={level} />

        <LevelPlacementsLayer level={level} />
      </div>
    </div>
  );
};

export default RenderLevel;
