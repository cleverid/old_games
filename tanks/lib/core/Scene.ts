import { BaseCallController } from "./controllers/BaseCallController";
import { BaseController } from "./controllers/BaseController";
import { BaseTransformController } from "./controllers/BaseTransformController";
import { GameObject } from "./objects/GameObject";
import { transLocalToGlobal } from "./utils/transformationLocalToGlobal";

export class Scene {
  private objects: GameObject[] = [];
  private controllers: [BaseController, GameObject][] = [];

  constructor(
    private ctx: CanvasRenderingContext2D,
    private width: number,
    private height: number
  ) {}

  addObject(obj: GameObject, controller?: BaseController): this {
    this.objects.push(obj);
    if (controller) {
      this.applyController(controller, obj);
    }
    return this;
  }

  applyController(controller: BaseController, obj: GameObject): this {
    this.controllers.push([controller, obj]);
    return this;
  }

  getControllers(obj: GameObject): BaseController[] {
    return this.controllers.filter((item) => item[1] === obj).map(i => i[0]);
  }

  render() {
    for (const obj of this.walkRender()) {
      if (obj.parent !== undefined) {
        const transGlobal = transLocalToGlobal(obj.transLocal, obj.parent.trans);
        obj.setTransformation(transGlobal);
      }
      
      const controllers = this.getControllers(obj);
      for (const controller of controllers) {
        if (controller instanceof BaseTransformController) {
          const trans = controller.step(obj);
          obj.setTransformation(trans);
        }
        if (controller instanceof BaseCallController) {
          controller.call();
        }
      }
    }

    this.ctx.clearRect(-10, -10, this.width + 10, this.height + 10);
    for (const obj of this.walkRender()) {
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

  *walkRender(parent?: GameObject): Generator<GameObject> {
    const items = parent === undefined 
      ? this.objects.filter(o => o.parent === undefined)
      : parent.children;

    for (const obj of items) {
      yield obj;
      if (obj.children.length > 0) {
        yield *this.walkRender(obj);
      }
    }
  }
}
