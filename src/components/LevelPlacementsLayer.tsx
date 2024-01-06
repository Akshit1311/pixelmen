import { TLevel } from "@/types";
import React from "react";

type Props = {
  level: TLevel;
};

const LevelPlacementsLayer = ({ level }: Props) => {
  return level.placements.map((placement, ix) => {
    const [x, y] = placement.displayXY();

    const transform = `translate(${x}px, ${y}px)`;

    return (
      <span key={placement.id} className="absolute" style={{ transform }}>
        {placement.renderComponent()}
      </span>
    );
  });
};

export default LevelPlacementsLayer;
