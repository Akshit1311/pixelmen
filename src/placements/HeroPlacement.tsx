import {
  BODY_SKINS,
  DIRECTIONS,
  DIRECTION_UPDATE_MAP,
  HERO_RUN_1,
  HERO_RUN_2,
  TILES,
} from "@/constants";
import { Placement, TPlacementConfig } from "./Placement";
import Sprite from "@/components/Sprite";
import Hero from "@/components/object-graphics/Hero";
import LevelState from "@/classes/LevelState";
import { TDirection } from "@/types";

const heroSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.HERO_LEFT, TILES.HERO_RIGHT],
  [HERO_RUN_1]: [TILES.HERO_RUN_1_LEFT, TILES.HERO_RUN_1_RIGHT],
  [HERO_RUN_2]: [TILES.HERO_RUN_2_LEFT, TILES.HERO_RUN_2_RIGHT],
} as const;

export class HeroPlacement extends Placement {
  controllerMoveRequested(direction: TDirection) {
    // Attempt to start moving
    if (this.movingPixelsRemaining) return;

    // Start the move
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  private getFrame() {
    const index = this.spriteFacingDirection === DIRECTIONS.LEFT ? 0 : 1;

    //Use correct walking frame per direction
    if (this.movingPixelsRemaining > 0) {
      const walkKey = this.spriteWalkFrame === 0 ? HERO_RUN_1 : HERO_RUN_2;
      return heroSkinMap[walkKey][index];
    }

    return heroSkinMap[BODY_SKINS.NORMAL][index];
  }

  private getYTranslate() {
    // Stand on ground when not moving
    if (this.movingPixelsRemaining === 0) {
      return 0;
    }

    //Elevate ramp up or down at beginning/end of movement
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelsRemaining < PIXELS_FROM_END ||
      this.movingPixelsRemaining > 16 - PIXELS_FROM_END
    ) {
      return -1;
    }

    // Highest in the middle of the movement
    return -2;
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

  updateFacingDirection() {
    if (
      this.movingPixelDirection === DIRECTIONS.LEFT ||
      this.movingPixelDirection === DIRECTIONS.RIGHT
    ) {
      this.spriteFacingDirection = this.movingPixelDirection;
    }
  }

  updateWalkFrame() {
    this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1;
  }

  tick() {
    console.log("UPDATE THE HERO!");
    this.tickMovingPixelProgress();
  }

  renderComponent = () => {
    return (
      <Hero
        frameCoord={this.getFrame()}
        yTranslate={this.getYTranslate()}
        peerId={this.id}
      />
    );
  };
}
