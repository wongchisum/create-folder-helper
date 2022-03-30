"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../../helper/logger"));
/**
 * 获取版本号
 * 使用: cfc --version 或者  cfc --version时执行
 */
function getVersion() {
    logger_1.default.info("Create Files Command version :0.0.4");
    process.exit(0);
}
exports.default = getVersion;
