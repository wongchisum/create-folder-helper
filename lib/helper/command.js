"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOptions = exports.getOptionsFromCommandArgs = void 0;
/**
 * 命令行相应工具函数
 */
/**
 * 根据命令行参数拆解成一组对象,进行合并
 * --log -> {log:true}
 * -name=router.js -> {name:"router.js"}
 */
function createOption(command, keyRule, valueRule) {
    var _a, _b;
    const [key] = (_a = command.match(keyRule)) !== null && _a !== void 0 ? _a : [];
    const [value] = (_b = command.match(valueRule)) !== null && _b !== void 0 ? _b : [];
    if (!key)
        return {};
    return {
        [key]: value !== null && value !== void 0 ? value : true,
    };
}
/**
 * 从命令行拆解选项,创建配置
 */
function getOptionsFromCommandArgs(keyRule, valueRule) {
    const commandArgs = process.argv.slice(2);
    const options = commandArgs.reduce((prev, current) => {
        let option = createOption(current, keyRule, valueRule);
        return Object.assign(Object.assign({}, prev), option);
    }, {});
    return options;
}
exports.getOptionsFromCommandArgs = getOptionsFromCommandArgs;
/**
 *
 */
/**
 * 传入当前的配置和配置的映射关系，合并参数
 * 若传入多次相同的key，则后者会覆盖前者
 *
 * 合并后的配置需要和默认配置做合并
 */
function mergeOptions(options, map, defaultOptions) {
    const keys = Object.keys(options);
    const merged = keys.reduce((prev, current) => {
        const key = map[current];
        const value = options[current];
        if (key && value) {
            return Object.assign(Object.assign({}, prev), { [key]: value });
        }
        else {
            return prev;
        }
    }, {});
    return Object.assign(defaultOptions, merged);
}
exports.mergeOptions = mergeOptions;
