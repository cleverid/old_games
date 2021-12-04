import { ITransformation, Transformation } from "../types";
import { BaseTransformController } from "./BaseTransformController";

export class LineMoveTransformController extends BaseTransformController {
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