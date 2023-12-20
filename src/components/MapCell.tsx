import React from "react";
import Sprite, { TFrameCoord } from "./Sprite";
import { CELL_SIZE } from "@/constants";

type Props = {
  x: number;
  y: number;
  frameCoord: TFrameCoord;
};

const MapCell = ({ x, y, frameCoord }: Props) => {
  return (
    <div
      className="absolute"
      style={{
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite frameCoord={frameCoord} />
    </div>
  );
};

export default MapCell;
