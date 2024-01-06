import { Placement } from "@/components/Placements/Placement";
import { LEVEL_THEMES, PLACEMENT_TYPES, TILES } from "@/constants";

// Derived Types
export type TTPlacementTypeKey = keyof typeof PLACEMENT_TYPES;

export type TPlacementType = (typeof PLACEMENT_TYPES)[TTPlacementTypeKey];

export type TTile = (typeof TILES)[keyof typeof TILES];

export type TLevelTheme = (typeof LEVEL_THEMES)[keyof typeof LEVEL_THEMES];

// TODO: fix this type
// export type TFrameCoord = `${number}x${number}`;
export type TFrameCoord = string;

export type TBlock = {
  id: number;
  x: number;
  y: number;
  frameCoord: TFrameCoord;
};
export type TPlacementConfig = {
  id: number;
  x: number;
  y: number;
  type: TTPlacementTypeKey;
};

export type TLevel = {
  theme: TLevelTheme;
  tilesHeight: number;
  tilesWidth: number;
  placements: Placement[];
};
