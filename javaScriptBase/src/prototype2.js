//构造函数

function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}
//创建示例

var f= new Foo('zhangsan')

f.printName = function () {
    console.log(this.name)
}

//测试

f.printName()

f.alertName()


var item

for(item in f){
    //高级浏览器已经在 for in 中屏蔽了来自原型的属性
    //但是这里建议大家还是加上这个判断，保证程序的健壮性
    if(f.hasOwnProperty(item)){
        console.log(item)
    }
}
