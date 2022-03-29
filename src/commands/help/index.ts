import logger from "../../helper/logger";

export default function help() {
  logger.tip(`Command help:\n
  cfc 
    -v or --version : Get current version of this tool.
    -h or --help:Get help with command tips.
    -n or --name:The name of target folder. 
    -e or --entry:Use relative path to select entry folder.
    -f or --files:Using string to create what file you like. Like "index.less,index.tsx"
  `);

  process.exit(0);
}
