"use client";

import Sprite from "@/components/Sprite";
import { SPRITE_SHEET_SRC } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [spriteSheetImage, setSpriteSheetImage] =
    useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = SPRITE_SHEET_SRC;
    img.onload = () => setSpriteSheetImage(img);
  }, []);

  if (!spriteSheetImage) return <div>Loading...</div>;

  return (
    <div>
      <Sprite image={spriteSheetImage} frameCoord="1x0" />
      <Sprite image={spriteSheetImage} frameCoord="0x2" />
    </div>
  );
}
