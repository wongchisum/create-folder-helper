import type { RecordType } from "../types";
/**
 * 从命令行拆解选项,创建配置
 */
export declare function getOptionsFromCommandArgs(keyRule: RegExp, valueRule: RegExp): RecordType;
/**
 *
 */
/**
 * 传入当前的配置和配置的映射关系，合并参数
 * 若传入多次相同的key，则后者会覆盖前者
 *
 * 合并后的配置需要和默认配置做合并
 */
export declare function mergeOptions(options: RecordType, map: RecordType): RecordType;
