define(["require", "exports", "../core/controllers/CarTransformController", "../core/controllers/CopyPositionTransformController", "../core/controllers/KeyCallController", "../core/controllers/LineMoveTransformController", "../core/controllers/MouseMoveTransformController", "../core/controllers/TargetTransformController", "../core/objects/EmptyObject", "../core/Scene", "./objects/AimObject", "./objects/Bullet", "./objects/Gun", "./objects/TankSimple"], function (require, exports, CarTransformController_1, CopyPositionTransformController_1, KeyCallController_1, LineMoveTransformController_1, MouseMoveTransformController_1, TargetTransformController_1, EmptyObject_1, Scene_1, AimObject_1, Bullet_1, Gun_1, TankSimple_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (canvas) => {
        const { width, height } = canvas;
        const ctx = canvas.getContext('2d');
        const scene = new Scene_1.Scene(ctx, width, height);
        const gun1 = new Gun_1.Gun();
        const gun2 = new Gun_1.Gun();
        const tank1 = new TankSimple_1.TankSimple()
            .setGun(gun1)
            .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
        const tank2 = new TankSimple_1.TankSimple()
            .setGun(gun2)
            .setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });
        const aim = new AimObject_1.AimObject();
        const cursor = new EmptyObject_1.EmptyObject().setTransformation({ position: { x: -20, y: -20 }, rotation: 0 });
        const controller1 = new CarTransformController_1.CarTransformController();
        const controller2 = new CarTransformController_1.CarTransformController({
            "up": ["ArrowUp"],
            "down": ["ArrowDown"],
            "left": ["ArrowLeft"],
            "right": ["ArrowRight"],
        });
        const aimController = new CopyPositionTransformController_1.CopyPositionTransformController(cursor);
        const targetController = new TargetTransformController_1.TargetTransformController(cursor);
        const onFire = (tank) => () => {
            const fireData = tank.fire();
            if (fireData && fireData.guns) {
                for (const trans of fireData.guns) {
                    const bullet = new Bullet_1.Bullet().setTransformation(trans);
                    const bulletController = new LineMoveTransformController_1.LineMoveTransformController(trans.rotation - Math.PI / 2, 1);
                    scene.addObject(bullet, bulletController);
                }
            }
        };
        const fireController1 = new KeyCallController_1.KeyCallController("KeyF", onFire(tank1));
        const fireController2 = new KeyCallController_1.KeyCallController("ShiftRight", onFire(tank2));
        scene.addObject(tank1, controller1)
            .addObject(tank2, controller2)
            .addObject(cursor, new MouseMoveTransformController_1.MouseMoveTransformController(canvas))
            .addObject(aim, aimController)
            .applyController(targetController, gun1)
            .applyController(fireController1, tank1)
            .applyController(fireController2, tank2);
        setInterval(() => {
            scene.render();
        }, 0);
    };
    exports.run = run;
});
//# sourceMappingURL=run.js.map