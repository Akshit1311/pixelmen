import { TLevelTheme } from "@/constants";

// TODO: fix this type
// export type TFrameCoord = `${number}x${number}`;
export type TFrameCoord = string;

export type TBlock = {
  id: number;
  x: number;
  y: number;
  frameCoord: TFrameCoord;
};

export type TPlacements = TBlock[];

export type TLevel = {
  theme: TLevelTheme;
  tilesHeight: number;
  tilesWidth: number;
  placements: TPlacements;
};
