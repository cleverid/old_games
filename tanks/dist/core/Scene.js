define(["require", "exports", "./controllers/BaseCallController", "./controllers/BaseTransformController", "./utils/transformationLocalToGlobal"], function (require, exports, BaseCallController_1, BaseTransformController_1, transformationLocalToGlobal_1) {
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
        addObject(obj, controller) {
            this.objects.push(obj);
            if (controller) {
                this.applyController(controller, obj);
            }
            return this;
        }
        applyController(controller, obj) {
            this.controllers.push([controller, obj]);
            return this;
        }
        getControllers(obj) {
            return this.controllers.filter((item) => item[1] === obj).map(i => i[0]);
        }
        render() {
            for (const obj of this.walkRender()) {
                if (obj.parent !== undefined) {
                    const transGlobal = (0, transformationLocalToGlobal_1.transLocalToGlobal)(obj.transLocal, obj.parent.trans);
                    obj.setTransformation(transGlobal);
                }
                const controllers = this.getControllers(obj);
                for (const controller of controllers) {
                    if (controller instanceof BaseTransformController_1.BaseTransformController) {
                        const trans = controller.step(obj);
                        obj.setTransformation(trans);
                    }
                    if (controller instanceof BaseCallController_1.BaseCallController) {
                        controller.call();
                    }
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
        *walkRender(parent) {
            const items = parent === undefined
                ? this.objects.filter(o => o.parent === undefined)
                : parent.children;
            for (const obj of items) {
                yield obj;
                if (obj.children.length > 0) {
                    yield* this.walkRender(obj);
                }
            }
        }
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map