import { PLACEMENT_TYPES, TILES } from "@/constants";
import React from "react";
import Sprite from "../Sprite";

type Props = {
  type: keyof typeof PLACEMENT_TYPES;
};

const PlacementFactory = ({ type }: Props) => {
  const PlacementTile = {
    [PLACEMENT_TYPES.HERO]: { frameCoord: TILES.HERO_RIGHT, size: 32 },
    [PLACEMENT_TYPES.GOAL]: { frameCoord: TILES.GOAL_DISABLED, size: 16 },
  };

  return (
    <Sprite
      frameCoord={PlacementTile[type].frameCoord}
      size={PlacementTile[type].size}
    />
  );
};

export default PlacementFactory;
