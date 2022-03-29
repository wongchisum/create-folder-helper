"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../../helper/logger"));
function help() {
    logger_1.default.tip("Command help:\n\n  cfc \n    -v or --version : Get current version of this tool.\n    -h or --help:Get help with command tips.\n    -n or --name:The name of target folder. \n    -e or --entry:Use relative path to select entry folder.\n    -f or --files:Using string to create what file you like. Like \"index.less,index.tsx\"\n  ");
    process.exit(0);
}
exports.default = help;
