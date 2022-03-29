/**
 * 选项和配置的映射
 */
export declare const CommandMapRules: {
    h: string;
    help: string;
    v: string;
    version: string;
    name: string;
    n: string;
    files: string;
    f: string;
    entry: string;
    e: string;
};
/**
 * 默认配置项
 */
export declare const DefaultOptions: {
    entry: string;
};
/**
 * 前置断言，用于匹配--[option]=[value]的option部分
 */
export declare const KeyRule: RegExp;
/**
 * 前置断言，用于--[option]=[value]的option部分
 */
export declare const ValueRule: RegExp;
/**
 * 匹配入口文件
 */
export declare const EntryFileRule: RegExp;
