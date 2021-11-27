define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TargetController = void 0;
    class TargetController extends BaseController_1.BaseController {
        targetObject;
        constructor(targetObject) {
            super();
            this.targetObject = targetObject;
        }
        step(obj) {
            const transTarget = this.targetObject.getTransformation();
            const trans = obj.getTransformation();
            const dx = transTarget.position.x - trans.position.x;
            const dy = transTarget.position.y - trans.position.y;
            trans.rotation = Math.atan2(dy, dx) + Math.PI / 2;
            return trans;
        }
    }
    exports.TargetController = TargetController;
});
//# sourceMappingURL=TargetController.js.map