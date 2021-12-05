import { EmptyObject } from "../../core/objects/EmptyObject";
import { Point } from "../../core/types";
import { FireData } from "../types";
import { BaseGun } from "./BaseGun";

export class GunBig extends BaseGun {
  pivot: Point = { x: 21, y: 25 };

  constructor() {
    super();
    this.addChildren(new EmptyObject(), { position: { x: -4, y: -24 }, rotation: 0})
    this.addChildren(new EmptyObject(), { position: { x: 4, y: -24 }, rotation: 0})
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
    ctx.rect(ofX + 24, ofY, 2, 15);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10, 15);
    ctx.lineTo(5, 35);
    ctx.lineTo(39, 35);
    ctx.lineTo(34, 15);
    ctx.lineTo(10, 15);
    ctx.stroke();
  }
}
