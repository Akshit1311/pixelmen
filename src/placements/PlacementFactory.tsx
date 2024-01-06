import { PLACEMENT_TYPES } from "@/constants";
import { Placement, TPlacementConfig } from "./Placement";
import { HeroPlacement } from "./HeroPlacement";
import { GoalPlacement } from "./GoalPlacement";
import { TPlacementType } from "@/types";
import LevelState from "@/classes/LevelState";

class PlacementFactory {
  createPlacement(config: TPlacementConfig, level: LevelState) {
    const instance = this.getInstance(config, level);
    // make ID here...
    return instance;
  }

  getInstance(config: TPlacementConfig, level: LevelState) {
    const placementObj: { [key in TPlacementType]: Placement } = {
      [PLACEMENT_TYPES.HERO]: new HeroPlacement(config, level),
      [PLACEMENT_TYPES.GOAL]: new GoalPlacement(config, level),
    };

    return placementObj[config.type];
  }
}

export const placementFactory = new PlacementFactory();
