/**
 *常量
 */

/**
 * 选项和配置的映射
 */
export const CommandMapRules = {
  h: "help",
  help: "help",
  v: "version",
  version: "version",
  name: "name",
  n: "name",
  files: "files",
  f: "files",
  entry: "entry",
  e: "entry",
};

/**
 * 前置断言，用于匹配--[option]=[value]的option部分
 */
export const KeyRule = /(?<=-{1,2})\w+/;

/**
 * 前置断言，用于--[option]=[value]的option部分
 */
export const ValueRule = /(?<=\=)\S+/;

/**
 * 匹配入口文件
 */
export const EntryFileRule = /^(i|I)ndex\.(t|j)sx?$/;
