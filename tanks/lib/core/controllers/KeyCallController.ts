import { BaseCallController } from "./BaseCallController";

export class KeyCallController extends BaseCallController {
    private callAnabel: boolean = false;
    constructor(keyCode: string, private callMethod: () => void) {
        super();

        document.addEventListener('keydown', (event) => {
            if (keyCode === event.code) {
                this.callAnabel = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            if (keyCode === event.code) {
                this.callAnabel = false;
            }
        });
    }

    call() {
        if (this.callAnabel) {
            this.callMethod();
        }
    }
}