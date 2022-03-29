/**
 * 带颜色的终端输出
 */
declare const logger: {
    info(message?: string): void;
    tip(message?: string): void;
    warn(message?: string): void;
    error(message?: string): void;
};
export default logger;
