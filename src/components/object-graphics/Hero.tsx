import React from "react";
import Sprite from "../Sprite";
import { TILES } from "@/constants";

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div className="absolute -top-5 -left-2">
        <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />
      </div>
    </div>
  );
};

export default Hero;
