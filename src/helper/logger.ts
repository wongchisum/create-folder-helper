/**
 * 带颜色的终端输出
 */

const logger = {
  info(message = "") {
    console.log("\x1b[32m", "[Info]", message);
  },
  tip(message = "") {
    console.log("\x1b[34m", "[Tip]", message);
  },
  warn(message = "") {
    console.log("\x1b[33m", "[Warn]", message);
  },
  error(message = "") {
    console.log("\x1b[31m", "[Error]", message);
  },
};

export default logger;
