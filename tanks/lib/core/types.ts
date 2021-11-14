export interface Point {
  x: number;
  y: number;
}
export type Direct = "up" | "down" | "left" | "right";
export type StepData = { position: Point };
