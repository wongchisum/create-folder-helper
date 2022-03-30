/**
 * 通过交互方式收集参数
 */
import inquirer from "inquirer";
import { handleErrorWithExitProcess } from "../../helper/process";

type ConfigType = {
  entry: unknown;
  files: unknown;
  name: unknown;
};

const { prompt } = inquirer;

async function getFolderName() {
  const { folderName } = await prompt({
    type: "input",
    name: "folderName",
    message: "Input your new folder name:",
  });

  return folderName;
}

async function getEntryName() {
  const { entryName } = await prompt({
    type: "input",
    name: "entryName",
    message: `Input your entry relative path: \n Default: [Current work dir:${process.env.INIT_CWD}]`,
  });
  return entryName;
}

async function getFileNames() {
  const { fileNames } = await prompt({
    type: "input",
    name: "fileNames",
    message: "Input your file names: (Like: index.less,index.tsx)",
  });

  return fileNames;
}

export default async function optionsCommand(config: ConfigType) {
  const { entry, files, name } = config;
  const entryName = entry || (await getEntryName()) || process.env.INIT_CWD;
  const folderName = name || (await getFolderName());
  if (!folderName) {
    handleErrorWithExitProcess("Invalid folder name!");
  }

  const fileNames = files || (await getFileNames()) || "";

  return { name: folderName, entry: entryName, files: fileNames };
}
