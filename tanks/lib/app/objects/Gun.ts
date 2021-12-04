import { EmptyObject } from "../../core/objects/EmptyObject";
import { Point } from "../../core/types";
import { FireData } from "../types";
import { BaseGun } from "./BaseGun";

export class Gun extends BaseGun {
  pivot: Point = { x: 17, y: 25 };

  constructor() {
    super();
    this.addChildren(new EmptyObject(), { position: { x: 0, y: -24 }, rotation: 0})
  }

  fire(): FireData | undefined {
    if (this.children.length > 0 && this.allowFire(3000)) {
      return { 
        guns: this.children.map(i => i.getTransformation()) 
      };
    }

    return;
  }

  render(ctx: CanvasRenderingContext2D): void {
    const ofX = 0;
    const ofY = 0;

    // Пушка
    ctx.beginPath();
    ctx.rect(ofX + 16, ofY, 2, 15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(ofX + 17, ofY + 25, 10, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
