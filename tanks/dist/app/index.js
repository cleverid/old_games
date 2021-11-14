define(["require", "exports", "../core/GameObject"], function (require, exports, GameObject_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    const run = (ctx) => {
        new GameObject_1.GameObject().render(ctx);
    };
    exports.run = run;
});
//# sourceMappingURL=index.js.map