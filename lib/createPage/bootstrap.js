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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constance_1 = require("./constance");
const command_1 = require("../helper/command");
const process_1 = require("../helper/process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // 拆解命令行参数，生成配置并过滤
        const options = (0, command_1.getOptionsFromCommandArgs)(constance_1.KeyRule, constance_1.ValueRule);
        const merged = (0, command_1.mergeOptions)(options, constance_1.CommandMapRules, constance_1.DefaultOptions);
        const { entry, files, name } = merged;
        if (!entry || !files || !name) {
            // 配置错误
            (0, process_1.handleErrorWithExitProcess)("Invalid process");
        }
        const targetDir = path_1.default.resolve(entry, name);
        // 检查指定的入口是否有相应的视图文件夹,如果有，不执行本次任务
        if (fs_1.default.existsSync(targetDir)) {
            (0, process_1.handleErrorWithExitProcess)(`Dir ${name} already exist!`);
        }
        // 根据files命令进行生成
        fs_1.default.mkdirSync(targetDir);
        fs_1.default.opendirSync(targetDir);
        // 遍历，生成相应的文件
        const dirs = files.split(",").filter((fileName) => fileName);
        dirs.forEach((dir) => {
            const filePath = path_1.default.resolve(targetDir, dir);
            fs_1.default.writeFileSync(filePath, "");
        });
    });
})();
