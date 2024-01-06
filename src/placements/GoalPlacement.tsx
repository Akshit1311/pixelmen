import { TILES } from "@/constants";
import { Placement } from "./Placement";
import Sprite from "@/components/Sprite";

export class GoalPlacement extends Placement {
  renderComponent = () => {
    return <Sprite frameCoord={TILES.GOAL_DISABLED} />;
  };
}
