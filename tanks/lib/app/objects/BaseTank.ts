import { GameObject } from "../../core/objects/GameObject";
import { FireData } from "../types";

export abstract class BaseTank extends GameObject {
  abstract setGun(gun: GameObject): this;
  abstract fire(): FireData | undefined;
}
