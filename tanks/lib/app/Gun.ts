import { GameObject } from "../core/GameObject";
import { Point } from "../core/types";

export class Gun extends GameObject {
  pivot: Point = { x: 17, y: 25 };

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
