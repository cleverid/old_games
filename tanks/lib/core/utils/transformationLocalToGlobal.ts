import { Transformation } from "../types";

export function transLocalToGlobal(local: Transformation, parent?: Transformation): Transformation {
    if (parent === undefined) return local;

    const offset = local.position;
    const { x, y } = parent.position;
    const rotation = parent.rotation;

    const fi = rotation + Math.PI / 2;
    return {
        position: {
            x: x + Math.cos(fi) * offset.y - Math.sin(fi) * offset.x, 
            y: y + Math.sin(fi) * offset.y + Math.cos(fi) * offset.x
        },
        rotation: rotation + local.rotation
    };
}