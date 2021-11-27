define(["require", "exports", "./BaseController"], function (require, exports, BaseController_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CarController = void 0;
    const mapDirectToKeyDefault = {
        "up": ["KeyW"],
        "down": ["KeyS"],
        "left": ["KeyA"],
        "right": ["KeyD"],
    };
    class CarController extends BaseController_1.BaseController {
        directs = new Map();
        constructor(mapDirectToKeyParams) {
            super();
            const mapDirectToKey = mapDirectToKeyParams ?? mapDirectToKeyDefault;
            const mapKeyToDirect = {};
            for (const [direct, keys] of Object.entries(mapDirectToKey)) {
                keys.forEach(key => mapKeyToDirect[key] = direct);
            }
            document.addEventListener('keydown', (event) => {
                if (mapKeyToDirect[event.code] !== undefined) {
                    this.directs.set(mapKeyToDirect[event.code], true);
                }
            });
            document.addEventListener('keyup', (event) => {
                if (mapKeyToDirect[event.code] !== undefined) {
                    this.directs.set(mapKeyToDirect[event.code], false);
                }
            });
        }
        step(obj) {
            const trans = obj.getTransformation();
            let position = { ...trans.position };
            let rotation = trans.rotation;
            const rotationSpeed = 0.005;
            const moveSpeed = 0.3;
            const PI_2 = Math.PI / 2;
            const mapTransform = {
                "up": () => {
                    position.x += Math.cos(rotation - PI_2) * moveSpeed;
                    position.y += Math.sin(rotation - PI_2) * moveSpeed;
                },
                "down": () => {
                    position.x -= Math.cos(rotation - PI_2) * moveSpeed;
                    position.y -= Math.sin(rotation - PI_2) * moveSpeed;
                },
                "left": () => { rotation -= rotationSpeed; },
                "right": () => { rotation += rotationSpeed; },
            };
            for (const [direct, value] of this.directs) {
                if (value && mapTransform[direct]) {
                    mapTransform[direct]();
                }
            }
            return { position, rotation };
        }
    }
    exports.CarController = CarController;
});
//# sourceMappingURL=CarController.js.map