import { CarTransformController } from "../core/controllers/CarTransformController";
import { CopyPositionTransformController } from "../core/controllers/CopyPositionTransformController";
import { KeyCallController } from "../core/controllers/KeyCallController";
import { LineMoveTransformController } from "../core/controllers/LineMoveTransformController";
import { MouseMoveTransformController } from "../core/controllers/MouseMoveTransformController";
import { TargetTransformController } from "../core/controllers/TargetTransformController";
import { EmptyObject } from "../core/objects/EmptyObject";
import { Scene } from "../core/Scene";
import { AimObject } from "./objects/AimObject";
import { BaseTank } from "./objects/BaseTank";
import { Bullet } from "./objects/Bullet";
import { Gun } from "./objects/Gun";
import { GunBig } from "./objects/GunBig";
import { TankBig } from "./objects/TankBig";
import { TankSimple } from "./objects/TankSimple";

export const run = (canvas: HTMLCanvasElement) => {
    const { width, height } = canvas;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const scene = new Scene(ctx, width, height);
    
    const gun1 = new Gun();
    const gun2 = new GunBig();
    const tank1 = new TankSimple()
        .setGun(gun1)
        .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
    const tank2 = new TankBig()
        .setGun(gun2)
        .setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });

    const aim = new AimObject();
    const cursor = new EmptyObject().setTransformation({ position: { x: -20, y: -20 }, rotation: 0 });

    const controller1 = new CarTransformController();
    const controller2 = new CarTransformController({
        "up": ["ArrowUp"],
        "down": ["ArrowDown"],
        "left": ["ArrowLeft"],
        "right": ["ArrowRight"],
    })
    const aimController = new CopyPositionTransformController(cursor);
    const targetController = new TargetTransformController(cursor);

    const onFire = (tank: BaseTank) => () => {
        const fireData = tank.fire();
        if (fireData && fireData.guns) {
            for (const trans of fireData.guns) {
                const bullet = new Bullet().setTransformation(trans);
                const bulletController = new LineMoveTransformController(trans.rotation - Math.PI / 2, 1);
                scene.addObject(bullet, bulletController);
            }
        }
    }
    const fireController1 = new KeyCallController("KeyF", onFire(tank1));
    const fireController2 = new KeyCallController("ShiftRight", onFire(tank2));

    scene.addObject(tank1, controller1)
        .addObject(tank2, controller2)
        .addObject(cursor, new MouseMoveTransformController(canvas))
        .addObject(aim, aimController)
        .applyController(targetController, gun1)
        .applyController(fireController1, tank1)
        .applyController(fireController2, tank2)
    ;

    setInterval(() => {
        scene.render();
    }, 0)
}