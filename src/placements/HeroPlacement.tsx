import { DIRECTIONS, DIRECTION_UPDATE_MAP, TILES } from "@/constants";
import { Placement, TPlacementConfig } from "./Placement";
import Sprite from "@/components/Sprite";
import Hero from "@/components/object-graphics/Hero";
import LevelState from "@/classes/LevelState";

export class HeroPlacement extends Placement {
  constructor(config: TPlacementConfig, level: LevelState) {
    super(config, level);
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = DIRECTIONS.RIGHT;
  }

  renderComponent = () => {
    return <Hero />;
  };

  tick() {
    console.log("UPDATE THE HERO!");
    this.tickMovingPixelProgress();
  }

  protected tickMovingPixelProgress() {
    if (!this.movingPixelsRemaining) return;

    console.log({ movingPixelsRemaining: this.movingPixelsRemaining });
    this.movingPixelsRemaining -= this.travelPixelsPerFrame;
    if (this.movingPixelsRemaining < 0) {
      this.movingPixelsRemaining = 0;
      this.onDoneMoving();
    }
  }

  private onDoneMoving() {
    // Update my x/y
    const { x, y } = DIRECTION_UPDATE_MAP[this.movingPixelDirection];
    this.x += x;
    this.y += y;
  }
}
