import React from "react";
import { CELL_SIZE } from "@/constants";
import Sprite from "./Sprite";
import { TLevel } from "@/types";

type Props = {
  level: TLevel;
};

const LevelPlacementsLayer = ({ level }: Props) => {
  return level.placements.map(({ id, x, y, frameCoord }, ix) => {
    const xCoord = `${x * CELL_SIZE}px`;
    const yCoord = `${y * CELL_SIZE}px`;
    const transform = `translate(${xCoord}, ${yCoord})`;

    return (
      <span key={id} className="absolute" style={{ transform }}>
        <Sprite frameCoord={frameCoord} />
      </span>
    );
  });
};

export default LevelPlacementsLayer;
