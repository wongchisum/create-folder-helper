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
    // 对输入的文件夹进行拆解和去重
    var folders = (name !== null && name !== void 0 ? name : "").split(",").filter(function (folder) { return folder; });
    var dirs = Array.from(new Set(folders));
    // 过滤掉已经存在文件夹(后续可能支持override覆盖)
    dirs
        .filter(function (dirName) {
        var targetDir = path_1.default.resolve(entry, dirName);
        var isExist = fs_1.default.existsSync(targetDir);
        if (isExist) {
            logger_1.default.warn("Dir [".concat(dirName, "] is already exist!"));
            return false;
        }
        return true;
    })
        .forEach(function (dirName) {
        var targetDir = path_1.default.resolve(entry, dirName);
        // 根据配置进行创建
        try {
            // 根据files命令进行生成
            fs_1.default.mkdirSync(targetDir);
            fs_1.default.opendirSync(targetDir);
            // 遍历，去重，生成相应的文件
            var dirs_1 = files.split(",").filter(function (fileName) { return fileName; });
            var uniqDirs = Array.from(new Set(dirs_1));
            uniqDirs.forEach(function (dir) {
                var filePath = path_1.default.resolve(targetDir, dir);
                fs_1.default.writeFileSync(filePath, "");
                logger_1.default.info("[".concat(dirName, "]: ").concat(dir, " created \u2714"));
            });
            logger_1.default.info("Create folder ".concat(dirName, " success!"));
        }
        catch (error) {
            (0, process_1.handleErrorWithExitProcess)("$Create failed!".concat(error));
        }
    });
}
exports.default = create;
