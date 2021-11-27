define(["require", "exports", "./utils/transformationLocalToGlobal"], function (require, exports, transformationLocalToGlobal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scene = void 0;
    class Scene {
        ctx;
        width;
        height;
        objects = [];
        controllers = [];
        constructor(ctx, width, height) {
            this.ctx = ctx;
            this.width = width;
            this.height = height;
        }
        addObject(obj) {
            this.objects.push(obj);
            return this;
        }
        addController(controller, obj) {
            this.controllers.push([controller, obj]);
            return this;
        }
        getController(obj) {
            return this.controllers.find((item) => item[1] === obj)?.[0];
        }
        render() {
            for (const obj of this.walkRender()) {
                if (obj.parent !== undefined) {
                    const transGlobal = (0, transformationLocalToGlobal_1.transLocalToGlobal)(obj.transLocal, obj.parent.trans);
                    obj.setTransformation(transGlobal);
                }
                const controller = this.getController(obj);
                if (controller) {
                    const trans = controller.step(obj);
                    obj.setTransformation(trans);
                }
            }
            this.ctx.clearRect(-10, -10, this.width + 10, this.height + 10);
            for (const obj of this.walkRender()) {
                const pivot = obj.pivot;
                const { position, rotation } = obj.getTransformation();
                const { x, y } = position;
                this.ctx.save();
                this.ctx.translate(x, y);
                this.ctx.rotate(rotation);
                this.ctx.translate(-pivot.x, -pivot.y);
                obj.renderObjet(this.ctx);
                this.ctx.restore();
            }
        }
        *walkRender() {
            const rootObjects = this.objects.filter(o => o.parent === undefined);
            for (const obj of rootObjects) {
                yield obj;
            }
            for (const obj of rootObjects) {
                for (const objChildren of obj.children) {
                    yield objChildren;
                }
            }
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map