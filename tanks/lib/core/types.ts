export interface Point {
  x: number;
  y: number;
}
export type Direct = "up" | "down" | "left" | "right";
export type Transformation = { 
  position: Point,
  rotation: number,
};

export interface ITransformation {
  getTransformation(): Transformation;
  setTransformation(trans: Transformation): this;
}