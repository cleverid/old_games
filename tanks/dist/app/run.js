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
                tank.setDirect(keyToDirect[event.key]);
            }
        });
        document.addEventListener('keyup', (event) => {
            if (keyToDirect[event.key] !== undefined) {
                tank.setDirect(undefined);
            }
        });
        setInterval(() => {
            const step = tank.step();
            tank.setPosition(step.position);
            const { x, y } = step.position;
            ctx.save();
            ctx.translate(x, y);
            ctx.clearRect(-10, -10, width + 10, height + 10);
            tank.renderObjet(ctx);
            ctx.restore();
        }, 0);
    };
    exports.run = run;
});
//# sourceMappingURL=run.js.map