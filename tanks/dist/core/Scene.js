define(["require", "exports"], function (require, exports) {
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
        render() {
            for (const [controller, obj] of this.controllers) {
                const trans = controller.step(obj);
                obj.setTransformation(trans);
            }
            this.ctx.clearRect(-10, -10, this.width + 10, this.height + 10);
            for (const obj of this.objects) {
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
    }
    exports.Scene = Scene;
});
//# sourceMappingURL=Scene.js.map