#!/usr/bin/env node
import {
  DefaultOptions,
  CommandMapRules,
  KeyRule,
  ValueRule,
} from "./constance";
import { getOptionsFromCommandArgs, mergeOptions } from "../helper/command";
import{handleErrorWithExitProcess} from '../helper/process'
import fs from "fs";
import path from 'path';

(async function () {
  // 拆解命令行参数，生成配置并过滤
  const options = getOptionsFromCommandArgs(KeyRule, ValueRule);
  const merged = mergeOptions(options, CommandMapRules, DefaultOptions);
  const { entry, files,name } = merged;

  if (!entry || !files || !name) {
    // 配置错误
    handleErrorWithExitProcess("Invalid process");
  }

  const targetDir = path.resolve(entry,name);
  // 检查指定的入口是否有相应的视图文件夹,如果有，不执行本次任务
  if (fs.existsSync(targetDir)) {
    handleErrorWithExitProcess(`Dir ${name} already exist!`);
  }

  // 根据files命令进行生成
  fs.mkdirSync(targetDir);
  fs.opendirSync(targetDir);
  // 遍历，生成相应的文件
  const dirs = files.split(",").filter((fileName:string) => fileName);
  dirs.forEach((dir:string) => {
    const filePath = path.resolve(targetDir,dir)
    fs.writeFileSync(filePath,"");
  })
})();
