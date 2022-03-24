import { getRouters } from "./generate";
import { createRouterFile,createExportFile } from "./create";
import { CommandMapRules,KeyRule,ValueRule } from "./constance";
import type { RecordType } from "./types";


/**
 * 根据命令行参数拆解成一组对象
 * --log -> {log:true}
 * -name=router.js -> {name:"router.js"}
 */
function createOption(command: string) {
  const [key] = command.match(KeyRule) ?? [];
  const [value] = command.match(ValueRule) ?? [];
  if (!key) return {};
  return {
    [key]: value ?? true,
  };
}

/**
 * 合并参数
 * 若传入多次相同的key，则后者会覆盖前者
 */
function mergeOptions(options: RecordType, map: RecordType) {
  const keys = Object.keys(options);
  return keys.reduce((prev: RecordType, current: string) => {
    const key = map[current];
    const value = options[current];
    if (key && value) {
      return { ...prev, [key]: value };
    } else {
      return prev;
    }
  }, {});
}

/**
 *收集命令行参数，转化为配置
 *形式: esno ./scripts/index.ts --watch --name=router.config.ts
 *获取配置{watch:true,name:"router.config.ts"}
 */
function getOptions() {
  const commandArgs = process.argv.slice(2);
  const options: RecordType = commandArgs.reduce(
    (prev: RecordType, current: string) => {
      let option = createOption(current);
      return { ...prev, ...option };
    },
    {}
  );

  return options;
}

(async function () {
  // 处理命令行参数的配置
  const options = getOptions();
  // 合并参数生成新配置
  const merged = mergeOptions(options, CommandMapRules);
  // 通过配置路由信息
  const routers = getRouters(merged);
  // 利用路由信息进行模板的替换，创建配置文件
  if (Array.isArray(routers)) {
    const { dir, name,entry } = merged;
    // 创建路由配置文件
    createRouterFile(routers, dir, name);
    // 更新导出文件
    createExportFile(routers,entry);
  }
})();
