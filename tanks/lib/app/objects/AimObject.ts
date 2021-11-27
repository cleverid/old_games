import { GameObject } from "../../core/objects/GameObject";
import { Point } from "../../core/types";

export class AimObject extends GameObject {
  pivot: Point = { x: 15, y: 15 };

  render(ctx: CanvasRenderingContext2D): void {
    const ofX = 0;
    const ofY = 0;

    ctx.beginPath();
    ctx.arc(ofX + 15, ofY + 15, 10, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(ofX + 15, ofY, 1, 8);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(ofX + 15, ofY + 22, 1, 8);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(ofX, ofY + 15, 8, 1);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(ofX + 22, ofY + 15, 8, 1);
    ctx.stroke();
  }
}
