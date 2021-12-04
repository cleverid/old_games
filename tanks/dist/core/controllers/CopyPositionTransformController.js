define(["require", "exports", "./BaseTransformController"], function (require, exports, BaseTransformController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CopyPositionTransformController = void 0;
    class CopyPositionTransformController extends BaseTransformController_1.BaseTransformController {
        copyObject;
        constructor(copyObject) {
            super();
            this.copyObject = copyObject;
        }
        step(obj) {
            const transCopy = this.copyObject.getTransformation();
            const trans = obj.getTransformation();
            trans.position = transCopy.position;
            return trans;
        }
    }
    exports.CopyPositionTransformController = CopyPositionTransformController;
});
//# sourceMappingURL=CopyPositionTransformController.js.map