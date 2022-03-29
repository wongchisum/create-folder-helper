# create-folder-helper

## 备注：

本功能仅限于学习使用，属于个人实验性质的开发作品。请勿在实际商用项目以及生产环境中应用！



## 开发动机:

在开发过程中，创建一个视图文件夹经常需要一次性创建多份文件（如：less 文件/logic 文件/type 文件等），手动创建非常费劲。我们期望用一个指令以npm scripts形式去调用。

对视图文件夹的创建，通过配置去选择在哪个入口进行创建，创建的文件类型等。



## 如何使用:

安装依赖(已发包)

```
yarn add create-folder-helper --dev
```

安装完毕之后，可以使用cfh这个命令进行检查(cfh:create folder helper)

```
cfh -h // 等同于 cfh --help

 [Tip] Command help:

  cfh
    -v or --version : Get current version of this tool.
    -h or --help:Get help with command tips.
    -n or --name:The name of target folder.
    -e or --entry:Use relative path to select entry folder.
    -f or --files:Using string to create what file you like. Like "index.less,index.tsx"
```



输入命令行，如果参数没有齐全，会触发命令行界面的交互，进行参数补全。



配置:

```
  cfh
    -v or --version : 查看当前版本
    -h or --help:查看命令行可用参数
    -n or --name:需要创建的文件夹名称
    -e or --entry:入口，使用相对路径去描述
    -f or --files:需要创建的文件名称，多个文件名称以逗号隔开
```



## 实践：

通过npm script对共用的参数进行配置，避免重复输入。

比如我想通过这个命令行工具，在src/pages下生成对应的视图文件夹和文件(index.less + index.tsx + logic.ts + types.ts),

我可以注册这样一个npm script:



```
// package.json 

{
	"scripts":{
		"generate":npx cfh --entry=./src/pages --files=index.less,index.tsx,logic.ts,types.ts"
	}
}
```

那么每一次运行yarn generate，只需要根据命令行交互输入的名称，就可以在这个位置创建不同的文件夹了，且每个文件夹都包含相应的名称。



## 如何工作：

待补充

---



## 后续待办事项：

- [x] 生成 bin，yarn link/unlink方式调试

- [x] 修复业务逻辑错误

- [x] 优化代码本身，整理代码逻辑

- [x] 发布 npm 包，作为 devDependencies 在其他项目应用

- [ ] 整理流程图的开发思路

- [ ] 优化文档，增加示例

- [ ] 开发允许批量新增的功能

- [ ] 增加测试代码

  

  
