declare type ConfigType = {
    entry: unknown;
    files: unknown;
    name: unknown;
};
export default function optionsCommand(config: ConfigType): Promise<{
    name: any;
    entry: any;
    files: any;
}>;
export {};
