import { TILES } from "@/constants";
import Sprite from "../Sprite";
import { Placement } from "./Placement";

export class HeroPlacement extends Placement {
  renderComponent = () => {
    return <Sprite frameCoord={TILES.HERO_RIGHT} size={32} />;
  };
}
