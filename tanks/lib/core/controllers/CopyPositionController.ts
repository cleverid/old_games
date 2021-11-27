import { BaseController } from "./BaseController";
import { ITransformation, Transformation } from "../types";
import { GameObject } from "../objects/GameObject";

export class CopyPositionController extends BaseController {
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