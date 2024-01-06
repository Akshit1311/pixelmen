import React from "react";
import Sprite from "../Sprite";
import { TILES } from "@/constants";

type THeroProps = {
  frameCoord: string;
  yTranslate: number;
};

const Hero = ({ frameCoord, yTranslate }: THeroProps) => {
  return (
    <div className="relative">
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div
        className="absolute -top-5 -left-2"
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        <Sprite frameCoord={frameCoord} size={32} />
      </div>
    </div>
  );
};

export default Hero;
