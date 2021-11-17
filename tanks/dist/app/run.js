define(["require", "exports", "../core/CarController", "../core/Scene", "./SimpleTank"], function (require, exports, CarController_1, Scene_1, SimpleTank_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (ctx, width, height) => {
        const tank1 = new SimpleTank_1.SimpleTank();
        const tank2 = new SimpleTank_1.SimpleTank().setTransformation({ position: { x: 100, y: 0 }, rotation: 0 });
        const controller1 = new CarController_1.CarController();
        const controller2 = new CarController_1.CarController({
            "up": ["ArrowUp"],
            "down": ["ArrowDown"],
            "left": ["ArrowLeft"],
            "right": ["ArrowRight"],
        });
        const scene = new Scene_1.Scene(ctx, width, height)
            .addObject(tank1)
            .addObject(tank2)
            .addController(controller1, tank1)
            .addController(controller2, tank2);
        setInterval(() => {
            scene.render();
        }, 0);
    };
    exports.run = run;
});
//# sourceMappingURL=run.js.map