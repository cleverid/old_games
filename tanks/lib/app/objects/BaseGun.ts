import { GameObject } from "../../core/objects/GameObject";
import { FireData } from "../types";

export abstract class BaseGun extends GameObject {
  private lastFire?: Date;
  protected allowFire(interval: number): boolean {
    const now = new Date().getTime();
    if (
      this.lastFire && now - this.lastFire.getTime() > interval // прошел интервал
      || this.lastFire === undefined // еще не было выстрела
    ) {
      this.lastFire = new Date();
      return true;
    }

    return false;
  }

  abstract fire(): FireData | undefined;
}
