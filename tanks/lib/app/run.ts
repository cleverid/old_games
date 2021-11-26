import { CarController } from "../core/CarController";
import { Scene } from "../core/Scene";
import { Gun } from "./Gun";
import { SimpleTank } from "./SimpleTank";
import { SimpleTankWithoutGun } from "./SimpleTankWithoutGun";

export const run = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gun = new Gun();
    const tank1 = new SimpleTankWithoutGun()
        .addChildren(gun, {x: 5, y: -5})
        .setTransformation({ position: { x: 100, y: 100 }, rotation: 0 });
    const tank2 = new SimpleTank().setTransformation({ position: { x: 200, y: 100 }, rotation: 0 });

    const controller1 = new CarController();
    const controller2 = new CarController({
        "up": ["ArrowUp"],
        "down": ["ArrowDown"],
        "left": ["ArrowLeft"],
        "right": ["ArrowRight"],
    })

    const scene = new Scene(ctx, width, height)
        .addObject(tank1)
        .addObject(tank2)
        .addController(controller1, tank1)
        .addController(controller2, tank2)
    ;

    setInterval(() => {
        scene.render();
    }, 0)
}