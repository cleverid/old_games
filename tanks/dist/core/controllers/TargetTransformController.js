define(["require", "exports", "./BaseTransformController"], function (require, exports, BaseTransformController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TargetTransformController = void 0;
    class TargetTransformController extends BaseTransformController_1.BaseTransformController {
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
    exports.TargetTransformController = TargetTransformController;
});
//# sourceMappingURL=TargetTransformController.js.map