define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    class GameObject {
        constructor() { }
        trans = { position: { x: 0, y: 0 }, rotation: 0 };
        transLocal = { position: { x: 0, y: 0 }, rotation: 0 };
        children = [];
        parent;
        addChildren(obj, offset) {
            obj.setParent(this, offset);
            this.children.push(obj);
            return this;
        }
        setParent(obj, offset) {
            this.parent = obj;
            this.transLocal = { position: offset, rotation: 0 };
            return this;
        }
        setTransformation(trans) {
            this.trans = trans;
            return this;
        }
        getTransformation() {
            return {
                position: { ...this.trans.position },
                rotation: this.trans.rotation
            };
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
        renderOsi = (ctx) => {
            ctx.fillStyle = "blue";
            ctx.rect(0, 0, 3, 100);
            ctx.fill();
            ctx.fillStyle = "red";
            ctx.rect(0, 0, 100, 3);
            ctx.fill();
        };
        renderObjet(ctx) {
            this.render(ctx);
        }
    }
    exports.GameObject = GameObject;
});
//# sourceMappingURL=GameObject.js.map