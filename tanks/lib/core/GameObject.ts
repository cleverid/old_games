import { ITransformation, Point, Transformation } from "./types";

export abstract class GameObject implements ITransformation {
    constructor() {}
    
    abstract readonly pivot: Point;
    protected position: Point = { x: 0, y: 0 };
    protected rotation: number = 0;
    public children: GameObject[] = [];
    public parent?: GameObject;
    public childrenOffset?: Point;

    abstract render(ctx: CanvasRenderingContext2D): void;

    addChildren(obj: GameObject, offset: Point): this {
        obj.setParent(this, offset);
        this.children.push(obj);
        return this;
    }

    setParent(obj: GameObject, offset: Point): this {
        this.parent = obj;
        this.childrenOffset = offset;
        return this;
    }

    setTransformation(trans: Transformation): this {
        this.position = trans.position;
        this.rotation = trans.rotation;
        return this;
    }

    getTransformation(): Transformation {
        return {
            position: { ... this.position },
            rotation: this.rotation
        }
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

    renderOsi = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle="blue";
        ctx.rect(0, 0, 3, 100)
        ctx.fill();
        ctx.fillStyle="red";
        ctx.rect(0, 0, 100, 3)
        ctx.fill();
    }

    renderObjet(ctx: CanvasRenderingContext2D): void {
        this.render(ctx);
        this.renderPivot(ctx);
        // this.renderOsi(ctx);
    }
}