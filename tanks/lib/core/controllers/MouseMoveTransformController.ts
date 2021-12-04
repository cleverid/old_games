import { ITransformation, Point, Transformation } from "../types";
import { BaseTransformController } from "./BaseTransformController";

export class MouseMoveTransformController extends BaseTransformController {
  private position: Point = { x: -100, y: -100 };
  constructor(canvas: HTMLCanvasElement) {
    super();
    canvas.addEventListener("mousemove", (e) => {
      var rect = canvas.getBoundingClientRect();
      const { clientX: x, clientY: y } = e;
      this.position = { x: x - rect.x, y: y - rect.y };
    });
  }

  step(obj: ITransformation): Transformation {
    const trans = obj.getTransformation();
    trans.position = { ... this.position };
    return trans;
  }
}
