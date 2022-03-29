declare type CreateConfig = {
    name: string;
    entry: string;
    files: string;
};
/**
 *
 * @param targetDir:string 指定创建文件的入口路径
 * @param files: 需要创建的文件名称，多个名称以逗号隔开
 */
export default function create(config: CreateConfig): undefined;
export {};
