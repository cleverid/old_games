define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CarController = void 0;
    class CarController {
        constructor() {
            const keyToDirect = {
                "up": ['w'],
                "down": ["s"],
                "left": ["a"],
                "right": "d"
            };
            document.addEventListener('keydown', (event) => {
                if (keyToDirect[event.key]) {
                    tank.setDirect(keyToDirect[event.key], true);
                }
            });
            document.addEventListener('keyup', (event) => {
                if (keyToDirect[event.key] !== undefined) {
                    tank.setDirect(keyToDirect[event.key], false);
                }
            });
        }
        step() {
        }
    }
    exports.CarController = CarController;
});
//# sourceMappingURL=CarController.js.map