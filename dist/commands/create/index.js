"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var process_1 = require("../../helper/process");
var logger_1 = __importDefault(require("../../helper/logger"));
/**
 *
 * @param targetDir:string 指定创建文件的入口路径
 * @param files: 需要创建的文件名称，多个名称以逗号隔开
 */
function create(config) {
    var entry = config.entry, name = config.name, files = config.files;
    // 检查指定的入口是否有存在相应文件夹,如果有,不执行本次任务
    var targetDir = path_1.default.resolve(entry, name);
    if (fs_1.default.existsSync(targetDir)) {
        return (0, process_1.handleErrorWithExitProcess)("Dir [".concat(name, "] is already exist!"));
    }
    // 根据配置进行创建
    try {
        // 根据files命令进行生成
        fs_1.default.mkdirSync(targetDir);
        fs_1.default.opendirSync(targetDir);
        // 遍历，去重，生成相应的文件
        var dirs = files.split(",").filter(function (fileName) { return fileName; });
        var uniqDirs = Array.from(new Set(dirs));
        uniqDirs.forEach(function (dir) {
            var filePath = path_1.default.resolve(targetDir, dir);
            fs_1.default.writeFileSync(filePath, "");
            logger_1.default.info("".concat(dir, " created \u2714"));
        });
        logger_1.default.info(" Create ".concat(name, " success!"));
    }
    catch (error) {
        (0, process_1.handleErrorWithExitProcess)("$Create failed!".concat(error));
    }
}
exports.default = create;
