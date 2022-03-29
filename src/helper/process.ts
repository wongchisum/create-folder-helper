import logger from "./logger";

// 命令行抛出错误，退出进程
export const handleErrorWithExitProcess = (reason: unknown) => {
  logger.error(`Process will exit because:${reason}`);
  process.exit(1);
};
