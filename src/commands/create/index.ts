import fs from "fs";
import path from "path";
import { handleErrorWithExitProcess } from "../../helper/process";
import logger from "../../helper/logger";

type CreateConfig = {
  name: string;
  entry: string;
  files: string;
};

/**
 *
 * @param targetDir:string 指定创建文件的入口路径
 * @param files: 需要创建的文件名称，多个名称以逗号隔开
 */
export default function create(config: CreateConfig) {
  const { entry, name, files } = config;
  // 检查指定的入口是否有存在相应文件夹,如果有,不执行本次任务

  // 对输入的文件夹进行拆解和去重
  const folders = (name ?? "").split(",").filter((folder: string) => folder);
  const dirs = Array.from(new Set(folders));

  // 过滤掉已经存在文件夹(后续可能支持override覆盖)
  dirs
    .filter((dirName: string) => {
      const targetDir = path.resolve(entry, dirName);
      const isExist = fs.existsSync(targetDir);
      if (isExist) {
        logger.warn(`Dir [${dirName}] is already exist!`);
        return false;
      }
      return true;
    })
    .forEach((dirName: string) => {
      const targetDir = path.resolve(entry, dirName);
      // 根据配置进行创建
      try {
        // 根据files命令进行生成
        fs.mkdirSync(targetDir);
        fs.opendirSync(targetDir);
        // 遍历，去重，生成相应的文件
        const dirs = files.split(",").filter((fileName: string) => fileName);
        const uniqDirs = Array.from(new Set(dirs));
        uniqDirs.forEach((dir: string) => {
          const filePath = path.resolve(targetDir, dir);
          fs.writeFileSync(filePath, "");
          logger.info(`[${dirName}]: ${dir} created ✔`);
        });
        logger.info(`Create folder ${dirName} success!`);
      } catch (error: unknown) {
        handleErrorWithExitProcess(`$Create failed!${error}`);
      }
    });
}
