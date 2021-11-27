define(["require", "exports", "./GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmptyObject = void 0;
    class EmptyObject extends GameObject_1.GameObject {
        pivot = { x: 0, y: 0 };
        render(_) { }
    }
    exports.EmptyObject = EmptyObject;
});
//# sourceMappingURL=EmptyObject.js.map