"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _a;
    var _b, _c;
    var key = ((_b = command.match(keyRule)) !== null && _b !== void 0 ? _b : [])[0];
    var value = ((_c = command.match(valueRule)) !== null && _c !== void 0 ? _c : [])[0];
    if (!key)
        return {};
    return _a = {},
        _a[key] = value !== null && value !== void 0 ? value : true,
        _a;
}
/**
 * 从命令行拆解选项,创建配置
 */
function getOptionsFromCommandArgs(keyRule, valueRule) {
    var commandArgs = process.argv.slice(2);
    var options = commandArgs.reduce(function (prev, current) {
        var option = createOption(current, keyRule, valueRule);
        return __assign(__assign({}, prev), option);
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
function mergeOptions(options, map) {
    var keys = Object.keys(options);
    var merged = keys.reduce(function (prev, current) {
        var _a;
        var key = map[current];
        var value = options[current];
        if (key && value) {
            return __assign(__assign({}, prev), (_a = {}, _a[key] = value, _a));
        }
        else {
            return prev;
        }
    }, {});
    return merged;
}
exports.mergeOptions = mergeOptions;
