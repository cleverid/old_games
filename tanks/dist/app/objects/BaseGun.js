define(["require", "exports", "../../core/objects/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseGun = void 0;
    class BaseGun extends GameObject_1.GameObject {
        lastFire;
        allowFire(interval) {
            const now = new Date().getTime();
            if (this.lastFire && now - this.lastFire.getTime() > interval
                || this.lastFire === undefined) {
                this.lastFire = new Date();
                return true;
            }
            return false;
        }
    }
    exports.BaseGun = BaseGun;
});
//# sourceMappingURL=BaseGun.js.map