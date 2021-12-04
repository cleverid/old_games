import { ITransformation, Transformation } from "../types";
import { GameObject } from "../objects/GameObject";
import { BaseTransformController } from "./BaseTransformController";

export class CopyPositionTransformController extends BaseTransformController {
    constructor(private copyObject: GameObject) {
      super();
    }

    step(obj: ITransformation): Transformation {
        const transCopy = this.copyObject.getTransformation();
        const trans = obj.getTransformation();
        trans.position = transCopy.position;
        
        return trans;
    }
}