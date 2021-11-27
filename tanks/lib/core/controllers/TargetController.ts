import { BaseController } from "./BaseController";
import { ITransformation, Transformation } from "../types";
import { GameObject } from "../objects/GameObject";

export class TargetController extends BaseController {
    constructor(private targetObject: GameObject) {
      super();
    }

    step(obj: ITransformation): Transformation {
        const transTarget = this.targetObject.getTransformation();
        const trans = obj.getTransformation();
        const dx = transTarget.position.x - trans.position.x;
        const dy = transTarget.position.y - trans.position.y;
        trans.rotation = Math.atan2(dy, dx) + Math.PI / 2;
        
        return trans;
    }
}