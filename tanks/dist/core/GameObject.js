define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    class GameObject {
        constructor() { }
        position = { x: 0, y: 0 };
        rotation = 0;
        children = [];
        parent;
        childrenOffset;
        addChildren(obj, offset) {
            obj.setParent(this, offset);
            this.children.push(obj);
            return this;
        }
        setParent(obj, offset) {
            this.parent = obj;
            this.childrenOffset = offset;
            return this;
        }
        setTransformation(trans) {
            this.position = trans.position;
            this.rotation = trans.rotation;
            return this;
        }
        getTransformation() {
            return {
                position: { ...this.position },
                rotation: this.rotation
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
            this.renderPivot(ctx);
        }
    }
    exports.GameObject = GameObject;
});
//# sourceMappingURL=GameObject.js.map