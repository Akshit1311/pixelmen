import { useSpriteSheetImgValue } from "@/atoms/spriteSheetImg.atom";
import { CELL_SIZE } from "@/constants";
import { TFrameCoord } from "@/types";
import React, { useEffect, useRef } from "react";

interface Props {
  frameCoord: TFrameCoord;
  size?: number;
} // "XxY" where X and Y are coords

interface SpriteChildProps extends Props {
  image: CanvasImageSource;
}

const SpriteChild = ({ frameCoord, size = 16, image }: SpriteChildProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;

    if (!canvasEl) return console.error("Canvas element not found");

    const ctx = canvasEl.getContext("2d");

    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    // Clear out anything in the canvas
    ctx.clearRect(0, 0, canvasEl.height, canvasEl.width);

    // Draw a graphic on the canvas
    const tileSheetX = Number(frameCoord.split("x")[0]);
    const tileSheetY = Number(frameCoord.split("x")[1]);

    ctx.drawImage(
      image, // Image to pull from
      tileSheetX * CELL_SIZE, // Left X corner of frame
      tileSheetY * CELL_SIZE, // Top Y corner of frame
      size, //How much to crop from the sprite sheet (X)
      size, //How much to crop from the sprite sheet (Y)
      0, //Where to place this on canvas tag X (0)
      0, //Where to place this on canvas tag Y (0)
      size, //How large to scale it (X)
      size //How large to scale it (Y)
    );
  }, [frameCoord, image, size]);

  return <canvas ref={canvasRef} height={16} width={16} />;
};

const Sprite = (props: Props) => {
  const image = useSpriteSheetImgValue();
  if (!image) return null;

  return <SpriteChild {...props} image={image} />;
};

export default Sprite;
