define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    class GameObject {
        constructor() { }
        directs = {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
        };
        position = { x: 0, y: 0 };
        rotation = 0;
        setPosition(point) {
            this.position = point;
            return this;
        }
        setRotation(rotation) {
            this.rotation = rotation;
            return this;
        }
        setDirect(direct, value = true) {
            this.directs[direct] = value;
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