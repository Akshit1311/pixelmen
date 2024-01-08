import { usePeerAudioNodeValue } from "@/atoms/peerAudioNode.atom";
import { PLACEMENT_TYPES } from "@/constants";
import { TLevel } from "@/types";
import React from "react";

type Props = {
  level: TLevel;
};

const LevelPlacementsLayer = ({ level }: Props) => {
  const peerAudioNodes = usePeerAudioNodeValue();

  return level.placements.map((placement, ix) => {
    const [x, y] = placement.displayXY();

    if (placement.type === PLACEMENT_TYPES.HERO && placement.id !== "0") {
      const peerAudioNode = peerAudioNodes[placement.id];
      if (peerAudioNode) {
        const deltaX = x - level.placements[0].x;

        peerAudioNode.pan.value = (deltaX % 10) / 10;
      }
    }

    const transform = `translate(${x}px, ${y}px)`;

    return (
      <span key={placement.id} className="absolute" style={{ transform }}>
        {placement.renderComponent()}
      </span>
    );
  });
};

export default LevelPlacementsLayer;
