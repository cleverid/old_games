import { BaseController } from "./BaseController";
import { ITransformation, Transformation } from "../types";

export class LineMoveController extends BaseController {
    private dx: number;
    private dy: number;

    constructor(angle: number, speed: number) {
      super();
      this.dx = Math.cos(angle) * speed;
      this.dy = Math.sin(angle) * speed;
    }

    step(obj: ITransformation): Transformation {
        const trans = obj.getTransformation();
        trans.position = { 
          x: trans.position.x + this.dx,
          y: trans.position.y + this.dy,
        };
        
        return trans;
    }
}