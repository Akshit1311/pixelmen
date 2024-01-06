import { TILES } from "@/constants";
import Sprite from "../Sprite";
import { Placement } from "./Placement";

export class GoalPlacement extends Placement {
  renderComponent = () => {
    return <Sprite frameCoord={TILES.GOAL_DISABLED} />;
  };
}
