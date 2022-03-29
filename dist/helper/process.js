"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorWithExitProcess = void 0;
var logger_1 = __importDefault(require("./logger"));
// 命令行抛出错误，退出进程
var handleErrorWithExitProcess = function (reason) {
    logger_1.default.error("Process will exit because:".concat(reason));
    process.exit(1);
};
exports.handleErrorWithExitProcess = handleErrorWithExitProcess;
