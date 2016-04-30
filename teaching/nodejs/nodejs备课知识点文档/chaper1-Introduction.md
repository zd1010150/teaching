### 1.nodejs是什么？

* nodejs是一种脚本语言（需要有一个解析器来运行的语言就是脚本）

* 脚本语言需要提供一些内置的对象和方法。例如浏览器就是一个解析器，提供了DOM操作内置功能。而对于nodejs就是操作磁盘和IO读写
### 2.nodejs的作用
作者本来的意图是用来搭建高性能的网站，对于每一个学习nodejs的人来说，不一定要搭建网站，但是使用nodejs可以开发一些命令行交互式的工具，还是绰绰有余
### 3.nodejs的安装
### 4.nodejs的模块
  在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。
####  4.1 模块分类

* 核心模块

* 文件模块（自己编写，第三方文件模块）

####  4.2 模块的核心方法
require,module,exports
####  4.3  nodejs 模块的加载
	优先缓存加载，无论是核心还是非核心模块，不同之处在于核心模块的检查会先于文件模块
1. require模块加载路径解析

* 核心模块。http、fs、path
* 以路径形式的文件模块。 绝对路径和相对路径，确定模块的绝对路径，然后进行文件定位
* 自定义模块（demo: model-path.js）。没有模块路径，沿着node_modules 父级 依次向上进行路径定位，每定位一个路径，就进行文件定位。
```
    例如当前执行模块所在的路径是：C:\\Users\\fedeoo\\kiwizhang\\projects\\node-project-workspace\\nodedemo\\src
    查找模块的路径是
    [ 'C:\\Users\\fedeoo\\kiwizhang\\projects\\node-project-workspace\\nodedemo\\src\\node_modules',
  'C:\\Users\\fedeoo\\kiwizhang\\projects\\node-project-workspace\\nodedemo\\node_modules',
  'C:\\Users\\fedeoo\\kiwizhang\\projects\\node-project-workspace\\node_modules',
  'C:\\Users\\fedeoo\\kiwizhang\\projects\\node_modules',
  'C:\\Users\\fedeoo\\kiwizhang\\node_modules',
  'C:\\Users\\fedeoo\\node_modules',
  'C:\\Users\\node_modules',
  'C:\\node_modules' ]
```
2.文件定位

文件扩展名的分析，目录和包。

  ```
  X
  X.js
  X.json
  X.node
  X/package.json(main)
  X/index.js
  X/index.json
  X/index.node
  ```

#### 4.4 主模块
通过命令参数传递给nodejs的启动模块，就是主模块。主模块调度所有的其他模块共同完成任务。
#### 4.5 二进制模块
使用c/c++ 编写的二进制模块，是以 .node结尾的，因为涉及c/c++的开发，不是前端涉及的领域，所以不在我们的讨论范围之内。


  ​

  ​