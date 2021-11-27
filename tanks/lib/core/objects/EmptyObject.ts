import { Point } from "../types";
import { GameObject } from "./GameObject";

export class EmptyObject extends GameObject {
    pivot: Point = { x: 0, y:0 };
    render(_: CanvasRenderingContext2D): void {}
}