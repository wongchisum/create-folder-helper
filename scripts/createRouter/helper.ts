import path from 'path';
/**
 * 项目文件夹为根目录，转化为绝对路径
 */
export const getAbsPath = (pathname:string) => {
    const workdir = process.cwd()
    return path.resolve(workdir,pathname);
}

/**
 * 报错处理
 * 输出报错信息，退出进程
 */
export function exitWithHandlerError(reason:unknown) {
    console.log("Error:",reason);
    process.exit(1);
}


export function pathResolve(pathname:string) {
    return path.resolve(__dirname,pathname)
}