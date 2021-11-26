define(["require", "exports", "../core/CarController", "../core/Scene", "./Gun", "./SimpleTank", "./SimpleTankWithoutGun"], function (require, exports, CarController_1, Scene_1, Gun_1, SimpleTank_1, SimpleTankWithoutGun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (ctx, width, height) => {
        const gun = new Gun_1.Gun();
        const tank1 = new SimpleTankWithoutGun_1.SimpleTankWithoutGun()
            .addChildren(gun, { x: 5, y: -5 })
            .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
        const tank2 = new SimpleTank_1.SimpleTank().setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });
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