import { CarController } from "../core/controllers/CarController";
import { CopyPositionController } from "../core/controllers/CopyPositionController";
import { TargetController } from "../core/controllers/TargetController";
import { EmptyObject } from "../core/objects/EmptyObject";
import { Scene } from "../core/Scene";
import { AimObject } from "./objects/AimObject";
import { Gun } from "./objects/Gun";
import { SimpleTank } from "./objects/SimpleTank";
import { SimpleTankWithoutGun } from "./objects/SimpleTankWithoutGun";

export const run = (canvas: HTMLCanvasElement) => {
    const { width, height } = canvas;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    
    const gun = new Gun();
    const aim = new AimObject()
    const cursor = new EmptyObject().setTransformation({ position: { x: -20, y: -20 }, rotation: 0 });
    const tank1 = new SimpleTankWithoutGun()
        .addChildren(gun, {x: 0, y: -6})
        .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
    const tank2 = new SimpleTank().setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });

    const controller1 = new CarController();
    const controller2 = new CarController({
        "up": ["ArrowUp"],
        "down": ["ArrowDown"],
        "left": ["ArrowLeft"],
        "right": ["ArrowRight"],
    })
    const aimController = new CopyPositionController(cursor);
    const targetController = new TargetController(cursor);

    const scene = new Scene(ctx, width, height)
        .addObject(tank1)
        .addObject(tank2)
        .addObject(cursor)
        .addObject(aim)
        .addController(controller1, tank1)
        .addController(controller2, tank2)
        .addController(aimController, aim)
        .addController(targetController, gun)
    ;

    canvas.addEventListener("mousemove", (e) => {
        var rect = canvas.getBoundingClientRect();
        const { clientX: x, clientY: y } = e
        cursor.setTransformation({ position: { x: x - rect.x, y: y - rect.y }, rotation: 0 });
    });

    setInterval(() => {
        scene.render();
    }, 0)
}