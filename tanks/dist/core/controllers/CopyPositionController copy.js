define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CopyPositionController = void 0;
    class CopyPositionController extends BaseController_1.BaseController {
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
    exports.CopyPositionController = CopyPositionController;
});
//# sourceMappingURL=CopyPositionController%20copy.js.map