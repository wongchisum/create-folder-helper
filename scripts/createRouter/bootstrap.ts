#!/usr/bin/env node
import { scanEntry, createRouterFile } from "./generate";
import {
  DefaultOptions,
  CommandMapRules,
  KeyRule,
  ValueRule,
} from "./constance";
import { getOptionsFromCommandArgs, mergeOptions } from "../helper/command";

(async function () {
  // 拆解命令行参数，生成配置并过滤
  const options = getOptionsFromCommandArgs(KeyRule, ValueRule);
  const merged = mergeOptions(options, CommandMapRules, DefaultOptions);
  const { entry, name } = merged;
  // 通过入口进行扫描，获取可以转换为路由配置的文件夹名称
  const dirs = scanEntry(merged.entry);

  // 在src目录下创建react router配置文件
  Array.isArray(dirs) && createRouterFile(dirs, entry, name);
})();
