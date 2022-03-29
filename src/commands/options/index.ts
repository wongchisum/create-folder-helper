/**
 * 通过交互方式收集参数
 */
import inquirer from "inquirer";
import { handleErrorWithExitProcess } from "../../helper/process";
import { DefaultOptions } from "../../constance";

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
    message: `Input your entry path: (Default: src/pages )`,
  });
  return entryName;
}

async function getFilleNames() {
  const { fileNames } = await prompt({
    type: "input",
    name: "fileNames",
    message: "Input your file names: (Like: index.less,index.tsx)",
  });

  return fileNames;
}

export default async function optionsCommand(config: ConfigType) {
  const { entry, files, name } = config;
  const entryName = entry || (await getEntryName()) || DefaultOptions.entry;
  const folderName = name || (await getFolderName());
  if (!folderName) {
    handleErrorWithExitProcess("Invalid folder name!");
  }

  const fileNames = files || (await getFilleNames());

  if (!fileNames) {
    handleErrorWithExitProcess("Invalid file names!");
  }

  return { name: folderName, entry: entryName, files: fileNames };
}
