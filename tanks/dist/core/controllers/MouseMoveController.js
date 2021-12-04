define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseMoveController = void 0;
    class MouseMoveController extends BaseController_1.BaseController {
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
    exports.MouseMoveController = MouseMoveController;
});
//# sourceMappingURL=MouseMoveController.js.map