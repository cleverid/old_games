import { BaseController } from "./BaseController";

export abstract class BaseCallController extends BaseController {
    abstract call(): any;
}