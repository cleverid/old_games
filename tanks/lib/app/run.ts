import { CarController } from "../core/controllers/CarController";
import { CopyPositionController } from "../core/controllers/CopyPositionController";
import { LineMoveController } from "../core/controllers/LineMoveController";
import { MouseMoveController } from "../core/controllers/MouseMoveController";
import { TargetController } from "../core/controllers/TargetController";
import { EmptyObject } from "../core/objects/EmptyObject";
import { Scene } from "../core/Scene";
import { AimObject } from "./objects/AimObject";
import { Gun } from "./objects/Gun";
import { TankSimple } from "./objects/TankSimple";

export const run = (canvas: HTMLCanvasElement) => {
    const { width, height } = canvas;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    
    const gun1 = new Gun();
    const gun2 = new Gun();
    const tank1 = new TankSimple()
        .addChildren(gun1, { position: { x: 0, y: -6 }, rotation: 0})
        .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
    const tank2 = new TankSimple()
        .addChildren(gun2, { position: { x: 0, y: -6 }, rotation: 0})
        .setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });

    const aim = new AimObject();
    const cursor = new EmptyObject().setTransformation({ position: { x: -20, y: -20 }, rotation: 0 });

    const controller1 = new CarController();
    const controller2 = new CarController({
        "up": ["ArrowUp"],
        "down": ["ArrowDown"],
        "left": ["ArrowLeft"],
        "right": ["ArrowRight"],
    })
    const aimController = new CopyPositionController(cursor);
    const targetController = new TargetController(cursor);

    const bullet = new EmptyObject();
    const bulletController = new LineMoveController(Math.PI / 4, 1);

    const scene = new Scene(ctx, width, height)
        .addObject(tank1, controller1)
        .addObject(tank2, controller2)
        .addObject(cursor, new MouseMoveController(canvas))
        .addObject(aim, aimController)
        .addObject(bullet, bulletController)
        .applyController(targetController, gun1)
    ;

    setInterval(() => {
        scene.render();
    }, 0)
}