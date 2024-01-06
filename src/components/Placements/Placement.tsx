import LevelState from "@/classes/LevelState";
import { TPlacementType } from "@/types";

export type TPlacementConfig = {
  id: number;
  type: TPlacementType;
  x: number;
  y: number;
};

export class Placement {
  id = 0;
  type = "";
  x = 0;
  y = 0;

  constructor(config: TPlacementConfig, level: LevelState) {
    this.id = config.id;
    this.type = config.type;
    this.x = config.x;
    this.y = config.y;
  }
  renderComponent: () => null | React.ReactNode = () => {
    return null;
  };
}
