# create-folder-helper

## 备注：

一个命令方便创建

------



## 开发动机:

在开发过程中，创建一个视图文件夹经常需要一次性创建多份文件（如：less 文件/logic 文件/type 文件等），手动创建非常费劲。

我们期望用一个指令以npm scripts形式去调用。

对视图文件夹的创建，通过配置去选择在哪个入口进行创建，创建的文件类型等。

------



## 如何使用:

环境(推荐NodeJS 14+版本)

安装依赖(目前已知全局安装无法调用，请安装为**devDependencies**)

```
yarn add create-folder-helper --dev
```

安装完毕之后，可以使用cfh这个命令进行检查(cfh:create folder helper的缩写)

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



------

## 配置:

```
  cfh
  	// 指令(可选)
    -v or --version : 查看当前版本
    -h or --help:查看命令行可用参数
    
    // 参数(必选)
    -n or --name:需要创建的文件夹名称
    -e or --entry:入口，使用相对路径去描述，不指定时使用终端默认的目录(cwd)
    -f or --files:需要创建的文件名称，多个文件名称以逗号隔开
```

如果执行cfh命令没有选择相应参数，还可以在终端交互工具中进行选择。

------



## 实践：



### 1.注册npm script，方便使用:

一般创建相应文件夹，所需要的入口是相同的，文件夹下的文件也是相同的。

可以通过npm script对共用的参数进行配置，避免重复输入。

比如我想通过这个命令行工具，在src/pages（相对路径）下生成对应的视图文件夹和文件(index.less + index.tsx + logic.ts + types.ts),

我可以注册这样一个npm script:

```
// package.json 

{
	"scripts":{
		"mkdir":npx cfh --entry=./src/pages --files=index.less,index.tsx,logic.ts,types.ts"
	}
}
```

那么每一次运行**yarn mkdir**，只需要根据命令行交互输入的名称，就可以在这个位置创建不同的文件夹了，且每个文件夹都包含相应的名称。





### 2.支持创建多个文件夹，支持创建空文件夹(0.0.4版本新增功能)

在终端交互过程中，可以忽略file的录入，这样会只生成文件夹不生成文件夹下的文件。

在终端交互过程中，可以通过英文逗号隔开的形式去写入多个file,这样可以生成多份文件夹。

------



## 如何工作：

待补充

---



## 后续待办事项：

- [x] 生成 bin，yarn link/unlink方式调试

- [x] 修复业务逻辑错误

- [x] 优化代码本身，整理代码逻辑

- [x] 发布 npm 包，作为 devDependencies 在其他项目应用

- [ ] 开发允许批量新增的功能 

- [ ] 优化文档，增加示例

- [ ] 整理流程图的开发思路

- [ ] 增加测试代码

- [ ] 如果没有设置当前的entry相对路径，使用终端运行时的Workdir目录作为entry

- [ ] 修复以global安装的形式无法调用cfh的问题

  

  
