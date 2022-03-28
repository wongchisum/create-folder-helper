"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRouterFile = exports.scanEntry = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * 从入口进行扫描，扫描相应的文件夹名称
 * 如果目录下还有文件夹，递归进行扫描
 * 最后生成扁平的路由结构
 */
function scanEntry(entry) {
    const target = [];
    function loop(entryPath) {
        if (fs_1.default.existsSync(entry)) {
            const result = fs_1.default.readdirSync(entryPath);
            Array.isArray(result) &&
                result.forEach((file) => {
                    const filePath = path_1.default.resolve(entryPath, file);
                    const status = fs_1.default.statSync(filePath);
                    const isDir = status.isDirectory();
                    // 如果扫描到文件夹，继续递归
                    if (isDir) {
                        target.push(filePath);
                        return loop(filePath);
                    }
                    else {
                        return;
                    }
                });
        }
        else {
            return target;
        }
    }
    loop(entry);
    return target;
}
exports.scanEntry = scanEntry;
/**
 * 通过扫描的文件路径创建路由配置文件
 */
function createRouterFile(dirs, entry, fileName) {
    // 生成导入信息
    const importContent = dirs.reduce((prev, current) => {
        const pathAlias = entry.replace(/(.*)src/, "@").replace(/\\/g, "/");
        const modulePath = current.replace(entry, "").replace(/\\/g, "/");
        const importPath = `${pathAlias}${modulePath}`;
        const componentPath = modulePath.split("/");
        const componentName = componentPath[componentPath.length - 1];
        return `${prev}import ${componentName} from '${importPath}';\n`;
    }, `///@ts-nocheck \n`);
    // 生成导出信息
    const exportContent = dirs.reduce((prev, current, index, list) => {
        const isLast = list.length - 1 === index;
        const modulePath = current.replace(entry, "").replace(/\\/g, "/");
        const componentPath = modulePath.split("/");
        const componentName = componentPath[componentPath.length - 1];
        if (isLast) {
            return `${prev}{path:'${modulePath}',component:<${componentName} />}\n]`;
        }
        return `${prev}{path:'${modulePath}',component:<${componentName} />},\n`;
    }, `// Router config \n export const routes = [ \n`);
    // 合并文本信息
    const mergedContent = `${importContent}\n${exportContent}`;
    const sourcePath = path_1.default.resolve(process.cwd(), `src/${fileName}`);
    // 根据模板创建文件
    fs_1.default.writeFileSync(sourcePath, mergedContent, "utf8");
    console.log("done!");
}
exports.createRouterFile = createRouterFile;
