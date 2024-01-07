import LevelState from "@/classes/LevelState";
import { CELL_SIZE, DIRECTIONS } from "@/constants";
import { TDirection, TFaceDirection, TPlacementType } from "@/types";

export type TPlacementConfig = {
  id: string;
  type: TPlacementType;
  x: number;
  y: number;
};

export class Placement {
  id = "0";
  type = "";
  x = 0;
  y = 0;

  protected movingPixelsRemaining = 0;
  protected travelPixelsPerFrame = 1.5;
  protected movingPixelDirection: TDirection = DIRECTIONS.RIGHT;
  protected spriteFacingDirection: TFaceDirection = DIRECTIONS.RIGHT;
  protected spriteWalkFrame = 0;

  constructor(config: TPlacementConfig, level: LevelState) {
    this.id = config.id;
    this.type = config.type;
    this.x = config.x;
    this.y = config.y;
  }

  tick() {}

  displayXY() {
    if (this.movingPixelsRemaining) {
      return this.displayMovingXY();
    }

    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;

    return [x, y];
  }

  displayMovingXY() {
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this.movingPixelsRemaining;

    const directionObj = {
      [DIRECTIONS.LEFT]: [x - progressPixels, y],
      [DIRECTIONS.RIGHT]: [x + progressPixels, y],
      [DIRECTIONS.UP]: [x, y - progressPixels],
      [DIRECTIONS.DOWN]: [x, y + progressPixels],
    };

    return directionObj[this.movingPixelDirection];
  }

  renderComponent: () => null | React.ReactNode = () => {
    return null;
  };
}
