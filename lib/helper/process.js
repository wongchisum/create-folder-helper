"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorWithExitProcess = void 0;
// 命令行抛出错误，退出进程
const handleErrorWithExitProcess = (reason) => {
    console.log(`Process will exit because:`, reason);
    process.exit(1);
};
exports.handleErrorWithExitProcess = handleErrorWithExitProcess;
