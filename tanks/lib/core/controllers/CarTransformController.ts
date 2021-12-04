import { Direct, ITransformation, Transformation } from "../types";
import { BaseTransformController } from "./BaseTransformController";

export type IMapDirectToKey = {[key in Direct]: string[]}
export type IMapKeyToDirect = {[key in string]: Direct}
const mapDirectToKeyDefault: IMapDirectToKey = {
    "up": ["KeyW"],
    "down": ["KeyS"],
    "left": ["KeyA"],
    "right": ["KeyD"],
}

export class CarTransformController extends BaseTransformController {
    private directs: Map<Direct, boolean> = new Map();

    constructor(mapDirectToKeyParams?: IMapDirectToKey) {
        super();
        const mapDirectToKey = mapDirectToKeyParams ?? mapDirectToKeyDefault;
        const mapKeyToDirect: IMapKeyToDirect = {};
        for (const [direct, keys] of Object.entries(mapDirectToKey)) {
            keys.forEach(key => mapKeyToDirect[key] = direct as Direct)
        }

        document.addEventListener('keydown', (event) => {
            if (mapKeyToDirect[event.code] !== undefined) {
                // @ts-ignore
                this.directs.set(mapKeyToDirect[event.code], true);
            }
        });

        document.addEventListener('keyup', (event) => {
            // @ts-ignore
            if (mapKeyToDirect[event.code] !== undefined) {
                // @ts-ignore
                this.directs.set(mapKeyToDirect[event.code], false);
            }
        });
    }

    step(obj: ITransformation): Transformation {
        const trans = obj.getTransformation();
        let position = { ...trans.position };
        let rotation = trans.rotation;

        const rotationSpeed = 0.005;
        const moveSpeed = 0.3;
        const PI_2 = Math.PI / 2;

        const mapTransform: {[key in Direct]: () => void } = {
          "up": () => { 
            position.x += Math.cos(rotation - PI_2) * moveSpeed; 
            position.y += Math.sin(rotation - PI_2) * moveSpeed;
          },
          "down": () => {
            position.x -= Math.cos(rotation - PI_2) * moveSpeed; 
            position.y -= Math.sin(rotation - PI_2) * moveSpeed;
          },
          "left": () => { rotation -= rotationSpeed },
          "right": () => { rotation += rotationSpeed },
        }
    
        for (const [direct, value] of this.directs) {
          if (value && mapTransform[direct]) {
            mapTransform[direct]()
          }
        }
        
        return { position, rotation };
    }
}