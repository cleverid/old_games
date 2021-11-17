import { BaseController } from "./BaseController";
import { GameObject } from "./GameObject";

export class Scene {
  private objects: GameObject[] = [];
  private controllers: [BaseController, GameObject][] = [];

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number
  ) {}

  addObject(obj: GameObject): this {
    this.objects.push(obj);
    return this;
  }

  addController(controller: BaseController, obj: GameObject): this {
    this.controllers.push([controller, obj]);
    return this;
  }

  render() {
    for (const [controller, obj] of this.controllers) {
      const trans = controller.step(obj);
      obj.setTransformation(trans);
    }

    this.ctx.clearRect(-10, -10, this.width + 10, this.height + 10);
    for (const obj of this.objects) {
      const pivot = obj.pivot;
      const { position, rotation } = obj.getTransformation();
      const { x, y } = position;

      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotation);
      this.ctx.translate(-pivot.x, -pivot.y);
      obj.renderObjet(this.ctx);
      this.ctx.restore();
    }

  }
}
