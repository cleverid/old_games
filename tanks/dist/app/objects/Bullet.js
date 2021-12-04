define(["require", "exports", "../../core/objects/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bullet = void 0;
    class Bullet extends GameObject_1.GameObject {
        pivot = { x: 10, y: 10 };
        render(ctx) {
            const { x, y } = this.pivot;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    exports.Bullet = Bullet;
});
//# sourceMappingURL=Bullet.js.map