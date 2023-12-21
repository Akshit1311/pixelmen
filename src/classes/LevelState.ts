import { LEVEL_THEMES, PLACEMENT_TYPES } from "@/constants";
import { TLevelTheme, TPlacement, TTile } from "@/types";

export type TLevelStateData = {
  theme: TLevelTheme;
  tilesWidth: number;
  tilesHeight: number;
  placements: TPlacement[];
};

export default class LevelState {
  private levelId = "";
  private theme: TLevelTheme = LEVEL_THEMES.YELLOW;
  private tilesWidth = 8;
  private tilesHeight = 8;
  private placements: TPlacement[] = [];
  private onEmit: (data: TLevelStateData) => void = () => {};

  // constructor(init: Omit<LevelState, "start">) {
  //   Object.assign(this, init);
  // }
  constructor(levelId: string, onEmit: typeof LevelState.prototype.onEmit) {
    this.levelId = levelId;
    this.onEmit = onEmit;
    // Can be deprecated
    this.start();
  }

  // Can be deprecated
  private start() {
    this.theme = LEVEL_THEMES.BLUE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [
      { id: 0, x: 2, y: 2, type: PLACEMENT_TYPES.HERO },
      { id: 1, x: 6, y: 4, type: PLACEMENT_TYPES.GOAL },
    ];
  }

  getState = () => ({
    theme: this.theme,
    tilesWidth: this.tilesWidth,
    tilesHeight: this.tilesHeight,
    placements: this.placements,
  });

  destroy() {
    // Tear down the level
  }
}

// const levelState = new LevelState({ })
