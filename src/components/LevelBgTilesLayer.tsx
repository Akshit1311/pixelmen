import React from "react";
import MapCell from "./MapCell";
import { THEME_TILES_MAP } from "@/constants";
import { TLevel } from "@/types";

type Props = {
  level: TLevel;
};

const LevelBgTilesLayer = ({ level }: Props) => {
  const widthWithWalls = level.tilesWidth + 1;
  const heightWithWalls = level.tilesHeight + 1;

  const tiles = THEME_TILES_MAP[level.theme];

  const getFrameCoord = (x: number, y: number) => {
    if (x === 0) return tiles.LEFT;
    if (x === widthWithWalls - 1) return tiles.RIGHT;
    if (y === 0) return tiles.TOP;
    if (y === heightWithWalls - 1) return tiles.BOTTOM;
    return tiles.FLOOR;
  };

  return (
    <div>
      {Array.from({ length: heightWithWalls }).map((_, y) => {
        return (
          <React.Fragment key={y}>
            {Array.from({ length: widthWithWalls }).map((_, x) => {
              if (
                (y === widthWithWalls - 1 || y === 0) &&
                (x === 0 || x === widthWithWalls - 1)
              )
                return null;

              return (
                <MapCell key={x} x={x} y={y} frameCoord={getFrameCoord(x, y)} />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default LevelBgTilesLayer;
