// node 中没有全局作用域名，只有模块作用域
// 相对路径./不能省略，否则会把它当做核心模块的引用，引发报错

// require的作用：1.加载文件并执行其中的代码；2.拿到被加载模块的接口对象
// require('./a.js')
// 每个模块都提供一个export对象(默认为null)，作为require的返回值。它挂载了所有被外部访问的成员。
//exports.add = add;

function add(x,y)
{
    return x+y;
}

exports.data= 4;
exports.add = add;