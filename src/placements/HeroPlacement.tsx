import { DIRECTIONS, DIRECTION_UPDATE_MAP, TILES } from "@/constants";
import { Placement, TPlacementConfig } from "./Placement";
import Sprite from "@/components/Sprite";
import Hero from "@/components/object-graphics/Hero";
import LevelState from "@/classes/LevelState";
import { TDirection } from "@/types";

export class HeroPlacement extends Placement {
  controllerMoveRequested(direction: TDirection) {
    // Attempt to start moving
    if (this.movingPixelsRemaining) return;

    // Start the move
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = direction;
  }

  private onDoneMoving() {
    // Update my x/y
    const { x, y } = DIRECTION_UPDATE_MAP[this.movingPixelDirection];
    this.x += x;
    this.y += y;
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

  tick() {
    console.log("UPDATE THE HERO!");
    this.tickMovingPixelProgress();
  }

  renderComponent = () => {
    return <Hero />;
  };
}
