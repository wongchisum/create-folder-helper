"use strict";
/**
 *常量
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryFileRule = exports.ValueRule = exports.KeyRule = exports.CommandMapRules = void 0;
/**
 * 选项和配置的映射
 */
exports.CommandMapRules = {
    h: "help",
    help: "help",
    v: "version",
    version: "version",
    name: "name",
    n: "name",
    files: "files",
    f: "files",
    entry: "entry",
    e: "entry",
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
