import React from "react";
import Sprite, { TFrameCoord } from "./Sprite";
import { CELL_SIZE } from "@/constants";

type Props = {
  spriteSheetImage: HTMLImageElement;
};

type TBlock = {
  id: number;
  x: number;
  y: number;
  frameCoord: TFrameCoord;
};

const RenderLevel = ({ spriteSheetImage }: Props) => {
  const level = {
    placements: [
      // "Level 0"
      // { id: 0, x: 0, y: 0, frameCoord: "0x2" },
      // { id: 1, x: 1, y: 1, frameCoord: "0x2" },
      // { id: 2, x: 2, y: 2, frameCoord: "0x2" },
      // { id: 3, x: 3, y: 3, frameCoord: "0x2" },
      // { id: 4, x: 4, y: 4, frameCoord: "0x2" },
      // { id: 5, x: 5, y: 5, frameCoord: "0x2" },
      // { id: 6, x: 6, y: 6, frameCoord: "0x2" },
      // { id: 7, x: 7, y: 7, frameCoord: "0x2" },

      // Level '1'
      // { id: 0, x: 0, y: 0, frameCoord: "0x2" },
      // { id: 1, x: 4, y: 2, frameCoord: "0x2" },
      // { id: 2, x: 2, y: 2, frameCoord: "0x2" },
      // { id: 3, x: 7, y: 3, frameCoord: "0x2" },
      // { id: 4, x: 2, y: 9, frameCoord: "0x2" },
      // { id: 5, x: 3, y: 5, frameCoord: "0x2" },
      // { id: 6, x: 1, y: 6, frameCoord: "0x2" },
      // { id: 7, x: 7, y: 7, frameCoord: "0x2" },
      // { id: 8, x: 9, y: 7, frameCoord: "0x2" },

      //Level '2'
      { id: 0, x: 2, y: 2, frameCoord: "0x2" },
      { id: 1, x: 2, y: 4, frameCoord: "0x2" },
      { id: 2, x: 2, y: 6, frameCoord: "0x2" },
      { id: 3, x: 2, y: 8, frameCoord: "0x2" },
      { id: 4, x: 4, y: 2, frameCoord: "0x2" },
      { id: 5, x: 4, y: 4, frameCoord: "0x2" },
      { id: 6, x: 4, y: 6, frameCoord: "0x2" },
      { id: 7, x: 4, y: 8, frameCoord: "0x2" },
      { id: 8, x: 6, y: 2, frameCoord: "0x2" },
      { id: 9, x: 6, y: 4, frameCoord: "0x2" },
      { id: 10, x: 6, y: 6, frameCoord: "0x2" },
      { id: 11, x: 6, y: 8, frameCoord: "0x2" },
      { id: 12, x: 8, y: 2, frameCoord: "0x2" },
      { id: 13, x: 8, y: 4, frameCoord: "0x2" },
      { id: 14, x: 8, y: 6, frameCoord: "0x2" },
      { id: 15, x: 8, y: 8, frameCoord: "0x2" },
      { id: 16, x: 7, y: 8, frameCoord: "0x2" },
    ],
  };

  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Game Screen */}
      <div
        className={
          "h-44 w-44 outline outline-red-500 scale-[2] md:scale-[3] lg:scale-[3.5] xl:scale-[3.75] 2xl:scale-[4]"
        }
      >
        {level.placements.map(({ id, x, y, frameCoord }, ix) => {
          const xCoord = `${x * CELL_SIZE}px`;
          const yCoord = `${y * CELL_SIZE}px`;
          const transform = `translate(${xCoord}, ${yCoord})`;

          return (
            <span key={id} className="absolute" style={{ transform }}>
              <Sprite
                image={spriteSheetImage}
                frameCoord={frameCoord as TFrameCoord}
              />
            </span>
          );
        })}
        <Sprite image={spriteSheetImage} frameCoord="1x2" />
      </div>
    </div>
  );
};

export default RenderLevel;
