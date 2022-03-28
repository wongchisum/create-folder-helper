"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathResolve = exports.exitWithHandlerError = exports.getAbsPath = void 0;
const path_1 = __importDefault(require("path"));
/**
 * 项目文件夹为根目录，转化为绝对路径
 */
const getAbsPath = (pathname) => {
    const workdir = process.cwd();
    return path_1.default.resolve(workdir, pathname);
};
exports.getAbsPath = getAbsPath;
/**
 * 报错处理
 * 输出报错信息，退出进程
 */
function exitWithHandlerError(reason) {
    console.log("Error:", reason);
    process.exit(1);
}
exports.exitWithHandlerError = exitWithHandlerError;
function pathResolve(pathname) {
    return path_1.default.resolve(__dirname, pathname);
}
exports.pathResolve = pathResolve;
