define(["require", "exports", "./BaseGun", "./BaseTank"], function (require, exports, BaseGun_1, BaseTank_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TankBig = void 0;
    class TankBig extends BaseTank_1.BaseTank {
        pivot = { x: 21, y: 30 };
        setGun(gun) {
            this.addChildren(gun, { position: { x: 0, y: -6 }, rotation: 0 });
            return this;
        }
        fire() {
            if (this.children.length > 0 && this.children[0] instanceof BaseGun_1.BaseGun) {
                return this.children[0].fire();
            }
            return;
        }
        render(ctx) {
            const ofX = 0;
            const ofY = 0;
            ctx.strokeStyle = "black";
            ctx.rect(ofX + 2, ofY + 10, 40, 45);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX, ofY + 14, 2, 37);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 42, ofY + 14, 2, 37);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(ofX + 6, ofY + 45, 32, 6);
            ctx.stroke();
        }
    }
    exports.TankBig = TankBig;
});
//# sourceMappingURL=TankBig.js.map