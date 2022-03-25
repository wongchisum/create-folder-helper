import { scanEntry, createRouterFile } from "./generate";
// import { createRouterFile, createExportFile } from "./create";
import {
  DefaultOptions,
  CommandMapRules,
  KeyRule,
  ValueRule,
} from "./constance";
import { getOptionsFromCommandArgs, mergeOptions } from "../helper/command";
import type { RecordType } from "./types";

(async function () {
  // 拆解命令行参数，生成配置并过滤
  const options = getOptionsFromCommandArgs(KeyRule, ValueRule);
  const merged = mergeOptions(options, CommandMapRules, DefaultOptions);
  const { entry, name } = merged;
  // 通过入口进行扫描，获取可以转换为路由配置的文件夹名称
  const dirs = scanEntry(merged.entry);

  // 在src目录下创建react router配置文件
  Array.isArray(dirs) && createRouterFile(dirs, entry, name);

  console.log("dirs", dirs);
  // 利用路由信息进行模板的替换，创建配置文件
  // if (Array.isArray(routers)) {
  //   const { dir, name,entry } = merged;
  //   // 创建路由配置文件
  //   createRouterFile(routers, dir, name);
  //   // 更新导出文件
  //   createExportFile(routers,entry);
  // }
})();
