define(["require", "exports", "../core/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gun = void 0;
    class Gun extends GameObject_1.GameObject {
        pivot = { x: 17, y: 25 };
        render(ctx) {
            const ofX = 0;
            const ofY = 0;
            ctx.beginPath();
            ctx.rect(ofX + 16, ofY, 2, 15);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(ofX + 17, ofY + 25, 10, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    exports.Gun = Gun;
});
//# sourceMappingURL=Gun.js.map