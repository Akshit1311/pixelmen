import { CELL_SIZE } from "@/constants";
import { TLevel } from "@/types";
import React from "react";
import PlacementFactory from "./Placements/PlacementFactory";

type Props = {
  level: TLevel;
};

const LevelPlacementsLayer = ({ level }: Props) => {
  return level.placements.map(({ id, x, y, type }, ix) => {
    const xCoord = `${x * CELL_SIZE}px`;
    const yCoord = `${y * CELL_SIZE}px`;
    const transform = `translate(${xCoord}, ${yCoord})`;

    return (
      <span key={id} className="absolute" style={{ transform }}>
        {/* <Sprite frameCoord={frameCoord} /> */}
        <PlacementFactory type={type} />
      </span>
    );
  });
};

export default LevelPlacementsLayer;
