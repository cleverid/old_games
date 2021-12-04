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
        addChildren(obj, trans) {
            obj.setParent(this, trans);
            this.children.push(obj);
            return this;
        }
        setParent(obj, trans) {
            this.parent = obj;
            this.transLocal = trans;
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
            const length = 20;
            const width = 1;
            ctx.save();
            ctx.fillStyle = "blue";
            ctx.fillRect(this.pivot.x, this.pivot.y, width, length);
            ctx.fillStyle = "red";
            ctx.fillRect(this.pivot.x, this.pivot.y, length, width);
            ctx.restore();
        };
        renderObjet(ctx) {
            this.render(ctx);
        }
    }
    exports.GameObject = GameObject;
});
//# sourceMappingURL=GameObject.js.map