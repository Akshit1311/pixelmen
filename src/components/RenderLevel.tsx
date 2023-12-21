import React, { useEffect, useState } from "react";
import {
  CELL_SIZE,
  HELPER_OUTLINE,
  LEVEL_THEMES,
  THEME_BACKGROUNDS,
  TLevelTheme,
} from "@/constants";
import LevelBgTilesLayer from "./LevelBgTilesLayer";
import LevelPlacementsLayer from "./LevelPlacementsLayer";
import LevelState, { TLevelStateData } from "@/classes/LevelState";
import { cn } from "@/utils/helpers";

type Props = {};

const RenderLevel = ({}: Props) => {
  const [level, setLevel] = useState<TLevelStateData | null>(null);

  useEffect(() => {
    const levelState = new LevelState("1", (data) => {
      console.log("Level data", data);
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
