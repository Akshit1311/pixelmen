import { TILES } from "@/constants";
import { Placement } from "./Placement";
import Sprite from "@/components/Sprite";
import Hero from "@/components/object-graphics/Hero";

export class HeroPlacement extends Placement {
  tick() {
    console.log("UPDATE THE HERO!");
  }

  renderComponent = () => {
    return <Hero />;
  };
}
