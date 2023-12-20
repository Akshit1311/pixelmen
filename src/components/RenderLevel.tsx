import React from "react";
import Sprite from "./Sprite";

type Props = {
  spriteSheetImage: HTMLImageElement;
};

const RenderLevel = ({ spriteSheetImage }: Props) => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      {/* Game Screen */}
      <div
        // style={{
        //   transform: `scale(${PIXEL_SIZE})`,
        // }}
        className={
          "h-44 w-44 outline outline-red-500 scale-[2] md:scale-[3] lg:scale-[3.5] xl:scale-[3.75] 2xl:scale-[4]"
        }
      >
        <Sprite image={spriteSheetImage} frameCoord="0x1" />
        <Sprite image={spriteSheetImage} frameCoord="1x2" />
      </div>
    </div>
  );
};

export default RenderLevel;
