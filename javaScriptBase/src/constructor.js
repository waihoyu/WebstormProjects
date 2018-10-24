function Foo(name,age) {
    this.name = name
    this.age = age
    this.class = 'class-1'
    //return this // 默认有这一行
}

var f = new Foo('zhangsan',20)

// var f1 = new Foo('lisi',22)  //创建多个对象


