define(["require", "exports", "./SimpleTank"], function (require, exports, SimpleTank_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (ctx, width, height) => {
        const tank = new SimpleTank_1.SimpleTank();
        const keyToDirect = {
            "w": "up",
            "s": "down",
            "a": "left",
            "d": "right",
        };
        document.addEventListener('keydown', (event) => {
            if (keyToDirect[event.key]) {
                tank.setDirect(keyToDirect[event.key], true);
            }
        });
        document.addEventListener('keyup', (event) => {
            if (keyToDirect[event.key] !== undefined) {
                tank.setDirect(keyToDirect[event.key], false);
            }
        });
        const renderOsi = (ctx) => {
            return;
            ctx.fillStyle = "blue";
            ctx.rect(0, 0, 3, 100);
            ctx.fill();
            ctx.fillStyle = "red";
            ctx.rect(0, 0, 100, 3);
            ctx.fill();
        };
        setInterval(() => {
            const step = tank.step();
            const pivot = tank.pivot;
            tank.setPosition(step.position);
            tank.setRotation(step.rotation);
            const { x, y } = step.position;
            const r = step.rotation;
            ctx.clearRect(-10, -10, width + 10, height + 10);
            ctx.save();
            renderOsi(ctx);
            ctx.translate(x, y);
            ctx.rotate(r);
            renderOsi(ctx);
            ctx.translate(-pivot.x, -pivot.y);
            tank.renderObjet(ctx);
            ctx.restore();
        }, 0);
    };
    exports.run = run;
});
//# sourceMappingURL=run.js.map