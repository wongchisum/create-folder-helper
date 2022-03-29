"use strict";
/**
 * 带颜色的终端输出
 */
Object.defineProperty(exports, "__esModule", { value: true });
var logger = {
    info: function (message) {
        if (message === void 0) { message = ""; }
        console.log("\x1b[32m", "[Info]", message);
    },
    tip: function (message) {
        if (message === void 0) { message = ""; }
        console.log("\x1b[34m", "[Tip]", message);
    },
    warn: function (message) {
        if (message === void 0) { message = ""; }
        console.log("\x1b[33m", "[Warn]", message);
    },
    error: function (message) {
        if (message === void 0) { message = ""; }
        console.log("\x1b[31m", "[Error]", message);
    },
};
exports.default = logger;
