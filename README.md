# create-react-routers



## 备注：

本功能仅限于学习使用，属于个人实验性质的开发作品。请勿在实际商用项目以及生产环境中应用！



### 功能需求：



#### 1.实现一个指令，支持监听文件。(监听部分未开发)

当前端指定的pages文件夹发生变动，通过运行npm scirpts去扫描并生成新的路由配置文件，以及相应的入口导出文件。相应的配置文件和入口导出文件应该支持(ts/tsx/js/jsx格式)。

选项：

-w -- watch 是否动态检测scr下路径是否变更，并生成相应的路由配置（默认不开启）
-l --log 是否在终端展示相应的控制台信息，可用于调试（默认不开启）
-n --name 生成配置的名称（需要包含后缀，没有后缀默认生成.js文件）
-e --entry 用于遍历生成入口的文件夹(默认为./src/pages目录)
-f --format ts或者js 输出的配置文件的格式

| 选项  | 选项别名     | 值类型             | 功能                                 | 备注                                         |
| --- | -------- | --------------- | ---------------------------------- | ------------------------------------------ |
| -w  | -- watch | null            | 是否动态检测scr下路径是否变更，并生成相应的路由配置（默认不开启） | （未实现）使用示例: --watch 或 -w                    |
| -n  | --name   | string          | 生成配置的名称（需要包含后缀，没有后缀默认生成.js文件）      | 使用示例: --name=router.config.ts              |
| -e  | --entry  | string          | 传入项目视图的入口文件夹所在路径（相对），用于扫描去实现配置更新   | 默认的入口文件夹: ./src/pages（--entry=./src/pages） |
| -l  | --log    | boolean         | 用于在生成配置信息和创建配置输出，便于调试              | （未实现）默认未开启,使用示例: --log或 -l                 |
| -f  | --format | enum "js"\|"ts" | 输出配置文件的脚本格式                        | (未实现) 默认选用ts,使用示例:--format=ts              |

---



#### 2.实现一个指令，支持创建前端文件。(开发中)

支持调用npm scripts，去创建一个前端的视图文件，可能包含index.(j|t)sx?,以及对应的types文件，



```
// esno ./scripts/createPage/bootstrap.ts --name=Home --type=ts --style=less --css-module

// 最终产物

/src
    /pages/
        /Home
            types.ts // 类型定义
            index.tsx  //  视图文件
            logic.ts // 逻辑文件
            index.module.less // 样式文件(Css Module)
         
```



选项：

-l --log 是否在终端展示相应的控制台信息，可用于调试（默认不开启）
-n --name 生成页面的名称（建议使用大驼峰格式命名:如 MyPage ）
-f --files 生成页面下的文件名称(默认生成index.tsx + types.ts + logic.ts + index.module.less)

---




## 3.后续待办事项：



- [ ] 生成bin，增加测试代码

- [ ] 修复生成页面入口文件(src/pages/index.ts，fs扫描出错)

- [ ] 支持react router v5/v6版本的配置

- [ ] 生成自定义配置与约定式配置的路由配置:router.merged.ts

- [ ] 发布npm包，作为devDependencies在其他项目应用

- [ ] 优化代码本身，整理代码逻辑，整理流程图的开发思路

- [ ] 配置方式优化，支持npm scripts或者esm/cjs方式调用

- [ ] 优化文档，增加示例