define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    class GameObject {
        constructor() { }
        direct;
        position = { x: 0, y: 0 };
        setPosition(point) {
            this.position = point;
            return this;
        }
        setDirect(direct) {
            this.direct = direct;
            return this;
        }
        renderPivot(ctx) {
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
            ctx.arc(this.pivot.x, this.pivot.y, 2, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.restore();
        }
        renderObjet(ctx) {
            this.render(ctx);
            this.renderPivot(ctx);
        }
    }
    exports.GameObject = GameObject;
});
//# sourceMappingURL=GameObject.js.map