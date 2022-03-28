"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryFileRule = exports.ValueRule = exports.KeyRule = exports.DefaultOptions = exports.CommandMapRules = void 0;
/**
 * 配置项的映射规则
 * 其他命令的等待功能开发后再增加拓展
 * watch: "watch",
 * w: "watch",
 * log: "log",
 * l: "log",
 * dir:"dir",
 * d:"dir"
 *
 */
const path_1 = __importDefault(require("path"));
exports.CommandMapRules = {
    name: "name",
    n: "name",
    entry: "entry",
    e: "entry",
};
/**
 * 默认配置项
 */
exports.DefaultOptions = {
    name: "router.override.tsx",
    entry: path_1.default.resolve(process.cwd(), "./src/pages"),
};
/**
 * 前置断言，用于匹配--[option]=[value]的option部分
 */
exports.KeyRule = /(?<=-{1,2})\w+/;
/**
 * 前置断言，用于--[option]=[value]的option部分
 */
exports.ValueRule = /(?<=\=)\S+/;
/**
 * 匹配入口文件
 */
exports.EntryFileRule = /^(i|I)ndex\.(t|j)sx?$/;
