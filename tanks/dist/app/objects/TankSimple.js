define(["require", "exports", "./BaseGun", "./BaseTank"], function (require, exports, BaseGun_1, BaseTank_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TankSimple = void 0;
    class TankSimple extends BaseTank_1.BaseTank {
        pivot = { x: 17, y: 30 };
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
    exports.TankSimple = TankSimple;
});
//# sourceMappingURL=TankSimple.js.map