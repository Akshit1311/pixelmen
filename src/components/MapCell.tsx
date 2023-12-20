import React from "react";
import Sprite, { TFrameCoord } from "./Sprite";
import { CELL_SIZE } from "@/constants";

type Props = {
  x: number;
  y: number;
  frameCoord: TFrameCoord;
  image: CanvasImageSource;
};

const MapCell = ({ x, y, frameCoord, image }: Props) => {
  return (
    <div
      className="absolute"
      style={{
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite image={image} frameCoord={frameCoord} />
    </div>
  );
};

export default MapCell;
