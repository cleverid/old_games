import { ITransformation, Transformation } from "../types";

export abstract class BaseController {
    abstract step(obj: ITransformation): Transformation;
}