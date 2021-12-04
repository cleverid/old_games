import { GameObject } from "../../core/objects/GameObject";
import { Point } from "../../core/types";

export class TankSimple extends GameObject {
  pivot: Point = { x: 17, y: 30 };

  render(ctx: CanvasRenderingContext2D): void {
    const ofX = 0;
    const ofY = 0;

    // Основа танка
    ctx.strokeStyle = "black";
    ctx.rect(ofX + 2, ofY + 10, 30, 40);
    ctx.stroke();

    // Гусеницы
    ctx.beginPath();
    ctx.rect(ofX, ofY + 14, 2, 32);
    ctx.stroke();
    ctx.beginPath();
    ctx.rect(ofX + 32, ofY + 14, 2, 32);
    ctx.stroke();

    // Ящик сзади
    ctx.beginPath();
    ctx.rect(ofX + 6, ofY + 40, 22, 6);
    ctx.stroke();
  }
}
