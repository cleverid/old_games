import { SimpleTank } from "./SimpleTank";

export const run = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const tank = new SimpleTank();

    const keyToDirect: any = {
        "w": "up",
        "s": "down",
        "a": "left",
        "d": "right",
    }
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

        const {x, y} = step.position;
        ctx.save();
        ctx.translate(x, y);

        ctx.clearRect(-10, -10, width + 10, height + 10);
        tank.renderObjet(ctx);
        ctx.restore();
    }, 0)
}