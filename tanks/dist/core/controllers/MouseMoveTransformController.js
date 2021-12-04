define(["require", "exports", "./BaseTransformController"], function (require, exports, BaseTransformController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseMoveTransformController = void 0;
    class MouseMoveTransformController extends BaseTransformController_1.BaseTransformController {
        position = { x: -100, y: -100 };
        constructor(canvas) {
            super();
            canvas.addEventListener("mousemove", (e) => {
                var rect = canvas.getBoundingClientRect();
                const { clientX: x, clientY: y } = e;
                this.position = { x: x - rect.x, y: y - rect.y };
            });
        }
        step(obj) {
            const trans = obj.getTransformation();
            trans.position = { ...this.position };
            return trans;
        }
    }
    exports.MouseMoveTransformController = MouseMoveTransformController;
});
//# sourceMappingURL=MouseMoveTransformController.js.map