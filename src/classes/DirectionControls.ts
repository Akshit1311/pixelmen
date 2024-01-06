import { DIRECTIONS } from "@/constants";

export class DirectionControls {
  directionKeys: { [key: string]: string } = {
    ArrowDown: DIRECTIONS.DOWN,
    ArrowUp: DIRECTIONS.UP,
    ArrowLeft: DIRECTIONS.LEFT,
    ArrowRight: DIRECTIONS.RIGHT,
    s: DIRECTIONS.DOWN,
    w: DIRECTIONS.UP,
    a: DIRECTIONS.LEFT,
    d: DIRECTIONS.RIGHT,
  };
  heldDirections: string[] = [];

  constructor() {
    document.addEventListener("keydown", this.directionKeyDownHandler);
    document.addEventListener("keyup", this.directionKeyUpHandler);
  }

  directionKeyDownHandler = (e: KeyboardEvent) => {
    const dir = this.directionKeys[e.key];
    if (dir && this.heldDirections.indexOf(dir) === -1) {
      this.heldDirections.unshift(dir);
      console.log(this.heldDirections);
    }
  };

  directionKeyUpHandler = (e: KeyboardEvent) => {
    const dir = this.directionKeys[e.key];
    const index = this.heldDirections.indexOf(dir);
    if (index > -1) {
      this.heldDirections.splice(index, 1);
      console.log(this.heldDirections);
    }
  };

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpHandler);
  }
}
