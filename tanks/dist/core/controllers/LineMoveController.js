define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LineMoveController = void 0;
    class LineMoveController extends BaseController_1.BaseController {
        dx;
        dy;
        constructor(angle, speed) {
            super();
            this.dx = Math.cos(angle) * speed;
            this.dy = Math.sin(angle) * speed;
        }
        step(obj) {
            const trans = obj.getTransformation();
            trans.position = {
                x: trans.position.x + this.dx,
                y: trans.position.y + this.dy,
            };
            return trans;
        }
    }
    exports.LineMoveController = LineMoveController;
});
//# sourceMappingURL=LineMoveController.js.map