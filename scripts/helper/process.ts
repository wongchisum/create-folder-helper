// 命令行抛出错误，退出进程
export const handleErrorWithExitProcess = (reason:unknown) => {
    console.log(`Process will exit because:`,reason);
    process.exit(1)
}