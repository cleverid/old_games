define(["require", "exports", "../core/controllers/CarController", "../core/controllers/CopyPositionController", "../core/objects/EmptyObject", "../core/Scene", "./objects/AimObject", "./objects/Gun", "./objects/SimpleTank", "./objects/SimpleTankWithoutGun"], function (require, exports, CarController_1, CopyPositionController_1, EmptyObject_1, Scene_1, AimObject_1, Gun_1, SimpleTank_1, SimpleTankWithoutGun_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (canvas) => {
        const { width, height } = canvas;
        const ctx = canvas.getContext('2d');
        const gun = new Gun_1.Gun();
        const aim = new AimObject_1.AimObject();
        const cursor = new EmptyObject_1.EmptyObject().setTransformation({ position: { x: -20, y: -20 }, rotation: 0 });
        const tank1 = new SimpleTankWithoutGun_1.SimpleTankWithoutGun()
            .addChildren(gun, { x: 0, y: -6 })
            .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
        const tank2 = new SimpleTank_1.SimpleTank().setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });
        const controller1 = new CarController_1.CarController();
        const controller2 = new CarController_1.CarController({
            "up": ["ArrowUp"],
            "down": ["ArrowDown"],
            "left": ["ArrowLeft"],
            "right": ["ArrowRight"],
        });
        const aimController = new CopyPositionController_1.CopyPositionController(cursor);
        const scene = new Scene_1.Scene(ctx, width, height)
            .addObject(tank1)
            .addObject(tank2)
            .addObject(cursor)
            .addObject(aim)
            .addController(controller1, tank1)
            .addController(controller2, tank2)
            .addController(aimController, aim);
        canvas.addEventListener("mousemove", (e) => {
            var rect = canvas.getBoundingClientRect();
            const { clientX: x, clientY: y } = e;
            cursor.setTransformation({ position: { x: x - rect.x, y: y - rect.y }, rotation: 0 });
        });
        setInterval(() => {
            scene.render();
        }, 0);
    };
    exports.run = run;
});
//# sourceMappingURL=run.js.map