### 1.Buffer
* JS本身只提供了字符串的数据类型，nodejs为了操作其他二进制的数据类型，提供了Buffer
* Buffer和string可以互相转换
```
var str=new Buffer('hello','utf-8');
buff.toString('utf-8')
```
* Buffer类似于C中的指针，一切对Buffer的操作，就本质的改变了文件内容。而string是不可以改变的，任何对string的改变，其实质都是新建了一个string
### 2.Stream
### 3.文件copy 
* 小文件copy.`fs.writeFileSync/fs.readFileSync`
* 大文件(水管)
  copy `fs.creatReadStream(src).pipe(fs.createWriteStream(dist))`


​
 >`Buffer`与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。至于`Buffer`，更像是可以做指针操作的C语言数组，对指针的操作就是对文件本质内容的修改。



>`Buffer`将JS的数据处理能力从字符串扩展到了任意二进制数据。

1. > `Stream`基于事件机制工作，所有`Stream`的实例都继承于NodeJS提供的[EventEmitter](http://nodejs.org/api/events.html)。