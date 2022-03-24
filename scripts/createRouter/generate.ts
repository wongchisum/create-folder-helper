import fs from "fs";
import { getAbsPath, exitWithHandlerError } from "./helper";
import path from 'path';
import type { RecordType,RouterItem } from "./types";
import {EntryFileRule} from './constance'


// Todo: 遍历树形结构转平级
export function getRouters(options: RecordType) {
  const entry = options.entry || "./src/pages/";
  const entryPath = getAbsPath(entry);

  console.log("entryPath",entryPath)
  // 从入口读取文件夹,生成相应的绝对路径名称
  try {
    const dirs = fs.readdirSync(entryPath);
    if (dirs && dirs.length) {
        const files:RouterItem[] = dirs.reduce((prev:any[],current:string) => {
            const abs = path.resolve(entry,current)
            return [...prev,{name:current,abs}]
        },[]);

        // 过滤数据，如果入口名称不满足(I)ndex.(t|j)sx?,则过滤掉，没有export default语法导出，过滤掉
        const filteredFiles = files.filter(({abs,name}:RouterItem) => {
            const fileNames = fs.readdirSync(abs);
            if (!fileNames.length) return false;
            return fs.readdirSync(abs).some((fileName:string) => {
              // 文件名称符合规范
              const isVlidFileName = EntryFileRule.test(fileName);
              if (!isVlidFileName) return false;
              // 包含export default语法
              const includeExportSyntax = fs.readFileSync(path.join(abs,fileName),"utf-8").includes("export default")

              return includeExportSyntax;
            })
        })


        return filteredFiles;
    }
  } catch (error: unknown) {
    console.log("getRouters dir error",error)
    exitWithHandlerError(error);
  }
}
