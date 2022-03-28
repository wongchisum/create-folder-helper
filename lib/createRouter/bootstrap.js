#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_1 = require("./generate");
const constance_1 = require("./constance");
const command_1 = require("../helper/command");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // 拆解命令行参数，生成配置并过滤
        const options = (0, command_1.getOptionsFromCommandArgs)(constance_1.KeyRule, constance_1.ValueRule);
        const merged = (0, command_1.mergeOptions)(options, constance_1.CommandMapRules, constance_1.DefaultOptions);
        const { entry, name } = merged;
        // 通过入口进行扫描，获取可以转换为路由配置的文件夹名称
        const dirs = (0, generate_1.scanEntry)(merged.entry);
        // 在src目录下创建react router配置文件
        Array.isArray(dirs) && (0, generate_1.createRouterFile)(dirs, entry, name);
    });
})();
