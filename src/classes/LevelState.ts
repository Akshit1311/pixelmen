import { LEVEL_THEMES, PLACEMENT_TYPES } from "@/constants";
import { TLevelTheme } from "@/types";
import GameLoop from "./GameLoop";
import { DirectionControls } from "./DirectionControls";
import { placementFactory } from "@/components/Placements/PlacementFactory";
import { Placement } from "@/components/Placements/Placement";

export type TLevelStateData = {
  theme: TLevelTheme;
  tilesWidth: number;
  tilesHeight: number;
  placements: Placement[];
};

export default class LevelState {
  private theme: TLevelTheme = LEVEL_THEMES.YELLOW;
  private tilesWidth = 8;
  private tilesHeight = 8;
  private placements: Placement[] = [];
  private gameLoop?: GameLoop;
  private directionControls = new DirectionControls();

  constructor(
    private levelId: string,
    private onEmit: (data: TLevelStateData) => void
  ) {
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
    ].map((config) => placementFactory.createPlacement(config, this));
    this.startGameLoop();
  }

  getState = () => ({
    theme: this.theme,
    tilesWidth: this.tilesWidth,
    tilesHeight: this.tilesHeight,
    placements: this.placements,
  });

  private startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      console.log("A FRAME!");
    });
  }

  destroy() {
    // Tear down the level
    this.gameLoop?.stop();
  }
}
