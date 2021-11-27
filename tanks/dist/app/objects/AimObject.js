define(["require", "exports", "../../core/objects/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AimObject = void 0;
    class AimObject extends GameObject_1.GameObject {
        pivot = { x: 15, y: 15 };
        render(ctx) {
            const ofX = 0;
            const ofY = 0;
            ctx.beginPath();
            ctx.arc(ofX + 15, ofY + 15, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 15, ofY, 1, 8);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 15, ofY + 22, 1, 8);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX, ofY + 15, 8, 1);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 22, ofY + 15, 8, 1);
            ctx.stroke();
        }
    }
    exports.AimObject = AimObject;
});
//# sourceMappingURL=AimObject.js.map