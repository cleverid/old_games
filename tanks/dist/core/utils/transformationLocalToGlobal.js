define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transLocalToGlobal = void 0;
    function transLocalToGlobal(local, parent) {
        if (parent === undefined)
            return local;
        const offset = local.position;
        const { x, y } = parent.position;
        const rotation = parent.rotation;
        const fi = rotation + Math.PI / 2;
        return {
            position: {
                x: x + Math.cos(fi) * offset.y - Math.sin(fi) * offset.x,
                y: y + Math.sin(fi) * offset.y + Math.cos(fi) * offset.x
            },
            rotation: 0
        };
    }
    exports.transLocalToGlobal = transLocalToGlobal;
});
//# sourceMappingURL=transformationLocalToGlobal.js.map