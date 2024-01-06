import { CELL_SIZE } from "@/constants";
import { TLevel } from "@/types";
import React from "react";

type Props = {
  level: TLevel;
};

const LevelPlacementsLayer = ({ level }: Props) => {
  return level.placements.map((placement, ix) => {
    const { id, x, y } = placement;

    const xCoord = `${x * CELL_SIZE}px`;
    const yCoord = `${y * CELL_SIZE}px`;
    const transform = `translate(${xCoord}, ${yCoord})`;

    return (
      <span key={id} className="absolute" style={{ transform }}>
        {placement.renderComponent()}
      </span>
    );
  });
};

export default LevelPlacementsLayer;
