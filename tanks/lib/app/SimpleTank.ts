import { GameObject } from "../core/GameObject";
import { Point } from "../core/types";

export class SimpleTank extends GameObject {
  pivot: Point = { x: 17, y: 30 };

  step() {
    let position = { ...this.position };
    let rotation = this.rotation;
    const rotationSpeed = 0.005;
    const moveSpeed = 0.3;
    const PI_2 = Math.PI / 2;
    const mapPositionTransform: {[key: string]: () => Point } = {
      "up": () => ({ 
        x: position.x + Math.cos(this.rotation - PI_2) * moveSpeed, 
        y: position.y + Math.sin(this.rotation - PI_2) * moveSpeed 
      }),
      "down": () => ({ 
        x: position.x - Math.cos(this.rotation - PI_2) * moveSpeed, 
        y: position.y - Math.sin(this.rotation - PI_2) * moveSpeed 
      })
    }
    const mapRotationTransform: {[key: string]: () => number } = {
        "left": () => rotation - rotationSpeed,
        "right": () => rotation + rotationSpeed,
    }

    for (const [direct, value] of Object.entries(this.directs)) {
      if (value && mapPositionTransform[direct]) {
        // @ts-ignore
        position = mapPositionTransform[direct]()
      }
      if (value && mapRotationTransform[direct]) {
        // @ts-ignore
        rotation = mapRotationTransform[direct]()
      } 
    }
    
    return { position, rotation };
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = "blue";
    const ofX = 0;
    const ofY = 0;

    // Основа танка
    ctx.strokeStyle = "black";
    ctx.rect(ofX + 2, ofY + 10, 30, 40);
    ctx.stroke();

    // Пушка
    ctx.beginPath();
    ctx.rect(ofX + 16, ofY, 2, 15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(ofX + 17, ofY + 25, 10, 0, 2 * Math.PI);
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
