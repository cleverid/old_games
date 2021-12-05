define(["require", "exports", "../../core/objects/EmptyObject", "./BaseGun"], function (require, exports, EmptyObject_1, BaseGun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GunBig = void 0;
    class GunBig extends BaseGun_1.BaseGun {
        pivot = { x: 21, y: 25 };
        constructor() {
            super();
            this.addChildren(new EmptyObject_1.EmptyObject(), { position: { x: -4, y: -24 }, rotation: 0 });
            this.addChildren(new EmptyObject_1.EmptyObject(), { position: { x: 4, y: -24 }, rotation: 0 });
        }
        fire() {
            if (this.children.length > 0 && this.allowFire(3000)) {
                return {
                    guns: this.children.map(i => i.getTransformation())
                };
            }
            return;
        }
        render(ctx) {
            const ofX = 0;
            const ofY = 0;
            ctx.beginPath();
            ctx.rect(ofX + 16, ofY, 2, 15);
            ctx.rect(ofX + 24, ofY, 2, 15);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(10, 15);
            ctx.lineTo(5, 35);
            ctx.lineTo(39, 35);
            ctx.lineTo(34, 15);
            ctx.lineTo(10, 15);
            ctx.stroke();
        }
    }
    exports.GunBig = GunBig;
});
//# sourceMappingURL=GunBig.js.map