import logger from "../../helper/logger";
/**
 * 获取版本号
 * 使用: cfc --version 或者  cfc --version时执行
 */
export default function getVersion() {
  logger.info(`Create Files Command version :0.0.4`);
  process.exit(0);
}
