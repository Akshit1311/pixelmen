"use client";

import { useSpriteSheetImg } from "@/atoms/spriteSheetImg.atom";
import RenderLevel from "@/components/RenderLevel";
import { SPRITE_SHEET_SRC } from "@/constants";
import useMeeting from "@/hooks/useMeeting";
import { useEffect, useState } from "react";

export default function Game() {
  const [spriteSheetImage, setSpriteSheetImage] = useSpriteSheetImg();

  useEffect(() => {
    const img = document.createElement("img");
    img.src = SPRITE_SHEET_SRC;
    img.onload = () => {
      setSpriteSheetImage(img);
    };
  }, [setSpriteSheetImage]);

  if (!spriteSheetImage) return <div>Loading...</div>;

  return <RenderLevel />;
}
