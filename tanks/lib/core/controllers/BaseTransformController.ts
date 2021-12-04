import { ITransformation, Transformation } from "../types";
import { BaseController } from "./BaseController";

export abstract class BaseTransformController extends BaseController {
    abstract step(obj: ITransformation): Transformation;
}