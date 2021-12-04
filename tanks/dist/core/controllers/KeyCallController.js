define(["require", "exports", "./BaseCallController"], function (require, exports, BaseCallController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyCallController = void 0;
    class KeyCallController extends BaseCallController_1.BaseCallController {
        callMethod;
        callAnabel = false;
        constructor(keyCode, callMethod) {
            super();
            this.callMethod = callMethod;
            document.addEventListener('keydown', (event) => {
                if (keyCode === event.code) {
                    this.callAnabel = true;
                }
            });
            document.addEventListener('keyup', (event) => {
                if (keyCode === event.code) {
                    this.callAnabel = false;
                }
            });
        }
        call() {
            if (this.callAnabel) {
                this.callMethod();
            }
        }
    }
    exports.KeyCallController = KeyCallController;
});
//# sourceMappingURL=KeyCallController.js.map