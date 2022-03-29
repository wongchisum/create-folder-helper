var $cClpN$process = require("process");
var $cClpN$fs = require("fs");
var $cClpN$path = require("path");
var $cClpN$inquirer = require("inquirer");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * 带颜色的终端输出
 */ const $4024f9c38676037c$var$logger = {
    info (message = "") {
        console.log("\x1b[32m", "[Info]", message);
    },
    tip (message = "") {
        console.log("\x1b[34m", "[Tip]", message);
    },
    warn (message = "") {
        console.log("\x1b[33m", "[Warn]", message);
    },
    error (message = "") {
        console.log("\x1b[31m", "[Error]", message);
    }
};
var $4024f9c38676037c$export$2e2bcd8739ae039 = $4024f9c38676037c$var$logger;



function $ed133e937de09d6c$export$2e2bcd8739ae039() {
    $4024f9c38676037c$export$2e2bcd8739ae039.tip(`Command help:\n
  cfc 
    -v or --version : Get current version of this tool.
    -h or --help:Get help with command tips.
    -n or --name:The name of target folder. 
    -e or --entry:Use relative path to select entry folder.
    -f or --files:Using string to create what file you like. Like "index.less,index.tsx"
  `);
    $cClpN$process.exit(0);
}




function $97f110eb6b0cbcf9$export$2e2bcd8739ae039() {
    $4024f9c38676037c$export$2e2bcd8739ae039.info(`Create Files Command version :0.0.1`);
    $cClpN$process.exit(0);
}






const $159cfe1ff9116080$export$e81e70f384f1b258 = (reason)=>{
    $4024f9c38676037c$export$2e2bcd8739ae039.error(`Process will exit because:${reason}`);
    $cClpN$process.exit(1);
};



function $ac3463b7622d0a47$export$2e2bcd8739ae039(config) {
    const { entry: entry , name: name , files: files  } = config;
    // 检查指定的入口是否有存在相应文件夹,如果有,不执行本次任务
    const targetDir = ($parcel$interopDefault($cClpN$path)).resolve(entry, name);
    if (($parcel$interopDefault($cClpN$fs)).existsSync(targetDir)) return $159cfe1ff9116080$export$e81e70f384f1b258(`Dir [${name}] is already exist!`);
    // 根据配置进行创建
    try {
        // 根据files命令进行生成
        ($parcel$interopDefault($cClpN$fs)).mkdirSync(targetDir);
        ($parcel$interopDefault($cClpN$fs)).opendirSync(targetDir);
        // 遍历，去重，生成相应的文件
        const dirs = files.split(",").filter((fileName)=>fileName
        );
        const uniqDirs = Array.from(new Set(dirs));
        uniqDirs.forEach((dir)=>{
            const filePath = ($parcel$interopDefault($cClpN$path)).resolve(targetDir, dir);
            ($parcel$interopDefault($cClpN$fs)).writeFileSync(filePath, "");
            $4024f9c38676037c$export$2e2bcd8739ae039.info(`${dir} created ✔`);
        });
        $4024f9c38676037c$export$2e2bcd8739ae039.info(` Create ${name} success!`);
    } catch (error) {
        $159cfe1ff9116080$export$e81e70f384f1b258(`$Create failed!${error}`);
    }
}






const $0ea1e332853caffe$export$1be7d3a80974d83 = {
    h: "help",
    help: "help",
    v: "version",
    version: "version",
    name: "name",
    n: "name",
    files: "files",
    f: "files",
    entry: "entry",
    e: "entry"
};
const $0ea1e332853caffe$export$677e6199c7753f27 = {
    entry: ($parcel$interopDefault($cClpN$path)).resolve($cClpN$process.cwd(), "./src/pages")
};
const $0ea1e332853caffe$export$8dcde9f09c2ebf25 = /(?<=-{1,2})\w+/;
const $0ea1e332853caffe$export$29859a7c66b63295 = /(?<=\=)\S+/;
const $0ea1e332853caffe$export$4c23a4e82f7b471 = /^(i|I)ndex\.(t|j)sx?$/;


const { prompt: $7f8ff1fdaeff0f10$var$prompt  } = ($parcel$interopDefault($cClpN$inquirer));
async function $7f8ff1fdaeff0f10$var$getFolderName() {
    const { folderName: folderName  } = await $7f8ff1fdaeff0f10$var$prompt({
        type: "input",
        name: "folderName",
        message: "Input your new folder name:"
    });
    return folderName;
}
async function $7f8ff1fdaeff0f10$var$getEntryName() {
    const { entryName: entryName  } = await $7f8ff1fdaeff0f10$var$prompt({
        type: "input",
        name: "entryName",
        message: `Input your entry path: (Default: src/pages )`
    });
    return entryName;
}
async function $7f8ff1fdaeff0f10$var$getFilleNames() {
    const { fileNames: fileNames  } = await $7f8ff1fdaeff0f10$var$prompt({
        type: "input",
        name: "fileNames",
        message: "Input your file names: (Like: index.less,index.tsx)"
    });
    return fileNames;
}
async function $7f8ff1fdaeff0f10$export$2e2bcd8739ae039(config) {
    const { entry: entry , files: files , name: name  } = config;
    const entryName = entry || await $7f8ff1fdaeff0f10$var$getEntryName() || $0ea1e332853caffe$export$677e6199c7753f27.entry;
    const folderName = name || await $7f8ff1fdaeff0f10$var$getFolderName();
    if (!folderName) $159cfe1ff9116080$export$e81e70f384f1b258("Invalid folder name!");
    const fileNames = files || await $7f8ff1fdaeff0f10$var$getFilleNames();
    if (!fileNames) $159cfe1ff9116080$export$e81e70f384f1b258("Invalid file names!");
    return {
        name: folderName,
        entry: entryName,
        files: fileNames
    };
}





/**
 * 命令行相应工具函数
 */ /**
 * 根据命令行参数拆解成一组对象,进行合并
 * --log -> {log:true}
 * -name=router.js -> {name:"router.js"}
 */ function $eb71579f4a5a77fa$var$createOption(command, keyRule, valueRule) {
    const [key] = command.match(keyRule) ?? [];
    const [value] = command.match(valueRule) ?? [];
    if (!key) return {};
    return {
        [key]: value ?? true
    };
}
function $eb71579f4a5a77fa$export$d2ad47c36d963a35(keyRule, valueRule) {
    const commandArgs = $cClpN$process.argv.slice(2);
    const options = commandArgs.reduce((prev, current)=>{
        let option = $eb71579f4a5a77fa$var$createOption(current, keyRule, valueRule);
        return {
            ...prev,
            ...option
        };
    }, {});
    return options;
}
function $eb71579f4a5a77fa$export$235b7fc70b9fc359(options, map) {
    const keys = Object.keys(options);
    const merged = keys.reduce((prev, current)=>{
        const key = map[current];
        const value = options[current];
        if (key && value) return {
            ...prev,
            [key]: value
        };
        else return prev;
    }, {});
    return merged;
}



(async function() {
    // 拆解命令行参数，生成配置并过滤
    const options = $eb71579f4a5a77fa$export$d2ad47c36d963a35($0ea1e332853caffe$export$8dcde9f09c2ebf25, $0ea1e332853caffe$export$29859a7c66b63295);
    const merged = $eb71579f4a5a77fa$export$235b7fc70b9fc359(options, $0ea1e332853caffe$export$1be7d3a80974d83);
    const { entry: entry , files: files , name: name , help: help , version: version  } = merged;
    // --help 或者 -h 执行
    if (help) $ed133e937de09d6c$export$2e2bcd8739ae039();
    else if (version) $97f110eb6b0cbcf9$export$2e2bcd8739ae039();
    else {
        // 补全参数，生成完整配置
        const cliOptions = await $7f8ff1fdaeff0f10$export$2e2bcd8739ae039({
            entry: entry,
            files: files,
            name: name
        });
        if (cliOptions) $ac3463b7622d0a47$export$2e2bcd8739ae039(cliOptions);
    }
})();


//# sourceMappingURL=bootstrap.js.map
