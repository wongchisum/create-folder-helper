import type { RouterItem } from "./types";
import { getAbsPath, pathResolve,exitWithHandlerError } from "./helper";
import fs from "fs";
import path from 'path';

// 创建src/pages组件的导出文件
export function createExportFile(routers: RouterItem[],entry:string) {
    // Todo:根据format调整入口文件的后缀名
   

    const templatePath = pathResolve("./exportTpl.txt");
    const text = fs.readFileSync(templatePath,"utf-8");
    const context = routers.reduce((prev:string,{name}:RouterItem) => {
      const exportText = `export {${name}} from './${name};'\n`;
      return `${prev}${exportText}`;
    },"");

    const merged = `${text}${context}`;

    const targetFilePath = path.join(process.cwd(),entry,"index.ts");
    // 将入口文件写入指定路径

    console.log("targetFilePath",targetFilePath)
    
    try {
      fs.writeFileSync(targetFilePath,merged)
    } catch(error:unknown) {
      exitWithHandlerError(error)
    }

    console.log("View entry file has generated!")
  }

// 创建路由配置文件
export function createRouterFile(
  routers: RouterItem[],
  dir: string,
  fileName: string
) {
  const absFileDir = getAbsPath(`${dir}/${fileName}`);
  const templatePath = pathResolve("./routerTpl.txt");

  const componentsList = routers.map(({ name }: RouterItem) => name).join(",");
  const configList = routers
    .map(({ name }: RouterItem) => `{path:${name},component:<${name}/>}`)
    .join(",");

  // 替换模板文件（目前仅适配react router v5）
  const text = fs
    .readFileSync(templatePath, "utf-8")
    .replace("componentsList", componentsList)
    .replace("routerConfig", configList);
  fs.writeFileSync(absFileDir, text);

  console.log("Routers has generated！");
}
