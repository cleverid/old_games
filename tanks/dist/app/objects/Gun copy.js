define(["require", "exports", "../../core/objects/EmptyObject", "./BaseGun"], function (require, exports, EmptyObject_1, BaseGun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Gun = void 0;
    class Gun extends BaseGun_1.BaseGun {
        pivot = { x: 17, y: 25 };
        constructor() {
            super();
            this.addChildren(new EmptyObject_1.EmptyObject(), { position: { x: 0, y: -24 }, rotation: 0 });
        }
        fire() {
            if (this.children.length > 0) {
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
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(ofX + 17, ofY + 25, 10, 0, 2 * Math.PI);
            ctx.stroke();
        }
    }
    exports.Gun = Gun;
});
//# sourceMappingURL=Gun%20copy.js.map