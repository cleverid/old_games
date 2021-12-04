define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LineMoveTransformController = void 0;
    class LineMoveTransformController extends BaseController_1.BaseController {
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
    exports.LineMoveTransformController = LineMoveTransformController;
});
//# sourceMappingURL=LineMoveTranformController.js.map