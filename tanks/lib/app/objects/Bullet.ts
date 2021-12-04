import { GameObject } from "../../core/objects/GameObject";
import { Point } from "../../core/types";

export class Bullet extends GameObject {
  pivot: Point = { x: 10, y: 10 };

  render(ctx: CanvasRenderingContext2D): void {
    const { x, y } = this.pivot;

    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
