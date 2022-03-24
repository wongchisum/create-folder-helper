/**
* 配置项的映射规则
*/
export const CommandMapRules = {
 watch: "watch",
 w: "watch",
 name: "name",
 n: "name",
 log: "log",
 l: "log",
 entry:"entry",
 e:"entry",
 dir:"dir",
 d:"dir"
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
export const EntryFileRule = /^(i|I)ndex\.(t|j)sx?$/