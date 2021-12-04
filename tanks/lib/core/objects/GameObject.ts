import { ITransformation, Point, Transformation } from "../types";

export abstract class GameObject implements ITransformation {
    constructor() {}
    
    abstract readonly pivot: Point;
    public trans: Transformation = { position: { x: 0, y: 0 },  rotation: 0 };
    public transLocal: Transformation = { position: { x: 0, y: 0 },  rotation: 0 };
    public children: GameObject[] = [];
    public parent?: GameObject;

    abstract render(ctx: CanvasRenderingContext2D): void;

    addChildren(obj: GameObject, trans: Transformation): this {
        obj.setParent(this, trans);
        this.children.push(obj);
        return this;
    }

    setParent(obj: GameObject, trans: Transformation): this {
        this.parent = obj;
        this.transLocal = trans;
        return this;
    }

    setTransformation(trans: Transformation): this {
        this.trans = trans;
        return this;
    }

    getTransformation(): Transformation {
        return {
            position: { ... this.trans.position },
            rotation: this.trans.rotation
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
        const length = 20;
        const width = 1;
        ctx.save();
        ctx.fillStyle="blue";
        ctx.fillRect(this.pivot.x, this.pivot.y, width, length)
        ctx.fillStyle="red";
        ctx.fillRect(this.pivot.x, this.pivot.y, length, width)
        ctx.restore();
    }

    renderObjet(ctx: CanvasRenderingContext2D): void {
        this.render(ctx);
        // this.renderPivot(ctx);
        this.renderOsi(ctx);
    }
}