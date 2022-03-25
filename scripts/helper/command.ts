import type { RecordType } from "../types";

/**
 * 命令行相应工具函数
 */

/**
 * 根据命令行参数拆解成一组对象,进行合并
 * --log -> {log:true}
 * -name=router.js -> {name:"router.js"}
 */
function createOption(command: string, keyRule: RegExp, valueRule: RegExp) {
  const [key] = command.match(keyRule) ?? [];
  const [value] = command.match(valueRule) ?? [];
  if (!key) return {};
  return {
    [key]: value ?? true,
  };
}

/**
 * 从命令行拆解选项,创建配置
 */
export function getOptionsFromCommandArgs(keyRule: RegExp, valueRule: RegExp) {
  const commandArgs = process.argv.slice(2);
  const options: RecordType = commandArgs.reduce(
    (prev: RecordType, current: string) => {
      let option = createOption(current, keyRule, valueRule);
      return { ...prev, ...option };
    },
    {}
  );

  return options;
}

/**
 *
 */

/**
 * 传入当前的配置和配置的映射关系，合并参数
 * 若传入多次相同的key，则后者会覆盖前者
 *
 * 合并后的配置需要和默认配置做合并
 */
export function mergeOptions(
  options: RecordType,
  map: RecordType,
  defaultOptions: RecordType
) {
  const keys = Object.keys(options);
  const merged = keys.reduce((prev: RecordType, current: string) => {
    const key = map[current];
    const value = options[current];
    if (key && value) {
      return { ...prev, [key]: value };
    } else {
      return prev;
    }
  }, {});

  return Object.assign(defaultOptions, merged);
}
