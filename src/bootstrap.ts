#!/usr/bin/env node
import {
  version as versionCommand,
  help as helpCommand,
  create as createCommand,
  options as optionsCommand,
} from "./commands";
import { getOptionsFromCommandArgs, mergeOptions } from "./helper/command";
import { CommandMapRules, KeyRule, ValueRule } from "./constance";

(async function () {
  // 拆解命令行参数，生成配置并过滤
  const options = getOptionsFromCommandArgs(KeyRule, ValueRule);
  const merged = mergeOptions(options, CommandMapRules);
  const { entry, files, name, help, version } = merged;

  // --help 或者 -h 执行
  if (help) {
    helpCommand();
  }
  // --version 或者 -v 执行
  else if (version) {
    versionCommand();
  } else {
    // 补全参数，生成完整配置
    const cliOptions = await optionsCommand({ entry, files, name });
    if (cliOptions) {
      createCommand(cliOptions);
    }
  }
})();
