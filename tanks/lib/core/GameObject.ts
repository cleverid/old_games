import { Direct, Point, StepData } from "./types";

export abstract class GameObject {
    constructor() {}
    abstract readonly pivot: Point;
    protected direct: Direct | undefined;
    protected position: Point = { x: 0, y: 0 };

    abstract render(ctx: CanvasRenderingContext2D): void;
    abstract step(): StepData;

    setPosition(point: Point): this {
        this.position = point;
        return this;
    }
    setDirect(direct?: Direct): this {
        this.direct = direct;
        return this;
    }
    renderPivot(ctx: CanvasRenderingContext2D): void {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.fillStyle="red";
        ctx.arc(this.pivot.x, this.pivot.y, 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore()
    }
    renderObjet(ctx: CanvasRenderingContext2D): void {
        this.render(ctx);
        this.renderPivot(ctx);
    }
}