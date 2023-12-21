import { LEVEL_THEMES, TILES, TLevelTheme } from "@/constants";
import { TPlacements } from "@/types";

export type TLevelStateData = {
  theme: TLevelTheme;
  tilesWidth: number;
  tilesHeight: number;
  placements: TPlacements;
};

export default class LevelState {
  private levelId: string = "";
  private theme: TLevelTheme = LEVEL_THEMES.YELLOW;
  private tilesWidth: number = 8;
  private tilesHeight: number = 8;
  private placements: TPlacements = [];
  private onEmit: (data: TLevelStateData) => void = () => {};

  // constructor(init: Omit<LevelState, "start">) {
  //   Object.assign(this, init);
  // }
  constructor(levelId: string, onEmit: typeof LevelState.prototype.onEmit) {
    this.levelId = levelId;
    this.onEmit = onEmit;
    this.start();
  }

  private start() {
    this.theme = LEVEL_THEMES.BLUE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [
      { id: 0, x: 2, y: 2, frameCoord: TILES.ICE_PICKUP },
      { id: 1, x: 2, y: 4, frameCoord: TILES.WATER_PICKUP },
      { id: 2, x: 2, y: 6, frameCoord: TILES.FIRE_PICKUP },
      { id: 3, x: 7, y: 2, frameCoord: TILES.GREEN_KEY },
      { id: 4, x: 7, y: 4, frameCoord: TILES.BLUE_LOCK },
      { id: 5, x: 7, y: 6, frameCoord: TILES.BULLET },
    ];

    setTimeout(() => {
      console.log("LevelState: emitting state");

      // Don't worry, this doesn't stay. Just to demonstrate.
      this.placements = [
        ...this.placements,
        { id: 6, x: 5, y: 5, frameCoord: TILES.BULLET },
      ];
      this.onEmit(this.getState());
    }, 1000);
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
