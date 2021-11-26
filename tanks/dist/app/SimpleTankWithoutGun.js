define(["require", "exports", "../core/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleTankWithoutGun = void 0;
    class SimpleTankWithoutGun extends GameObject_1.GameObject {
        pivot = { x: 17, y: 30 };
        render(ctx) {
            ctx.strokeStyle = "blue";
            const ofX = 0;
            const ofY = 0;
            ctx.strokeStyle = "black";
            ctx.rect(ofX + 2, ofY + 10, 30, 40);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX, ofY + 14, 2, 32);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 32, ofY + 14, 2, 32);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 6, ofY + 40, 22, 6);
            ctx.stroke();
        }
    }
    exports.SimpleTankWithoutGun = SimpleTankWithoutGun;
});
//# sourceMappingURL=SimpleTankWithoutGun.js.map