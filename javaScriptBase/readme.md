#  JavaScript 前端基础面试题

## 知识点

---
> 变量类型

  1、 值类型 VS 引用类型 

```javascript

    var a = 100
    var b = a
    a = 200
    console.log(b)

````

```javascript

    var a = {age:20}
    var b = a
    b.age = 21
    console.log(a.age)

````
引用类型： 对象、数组、函数


2、 typeof 运算符详解

    能得到6种类型
    
    typeof undefined //undefined
    typeof 'abc' //string
    typeof 123 // number
    typeof true //boolean
    
    typeof {} //object
    typeof [] //object
    typeof null //object
    typeof console.log // function

    注意点：typeof 只能区分值类型的详细类型。但是typeof 针对于引用类型则是无能为力了。

3、 变量计算  -- 强制类型转换

   > 字符串拼接
    
    var a = 100 + 10
    
    var b = 100 + '10'
    
   >  == 运算符
    
    100 == '100'  //true
    0 == '' //true
    null == undefined // true
    
   > if语句
    
    var a = true
    if(a){

    }
    var b = 100
    if(b){

    }
    var c = ''
    if(c){
      
    }    
   > 逻辑运算
   
```javascript   
   console.log(10 && 0) //0
   console.log(‘’ || ‘abc’) // 'abc'
   console.log(!window.abc) //true
   
   //判断一个变量会被当做true 还是 false
   
   var a = 100
   console.log(!!a)
````   
   
4、  原型和原型链-构造函数

- 构造函数

```javascript

    function Foo(name,age) {
        this.name = name
        this.age = age
        this.class = 'class-1'
        //return this // 默认有这一行
    }
    var f = new Foo('zhangsan',20)
    
    // var f1 = new Foo('lisi',22)  //创建多个对象

````

- 构造函数-扩展

```bash

    var a = {} 其实是var a = new Object() 的语法糖
    
    var a = [] 其实是 var a = new Array()的语法糖
    
    function Foo(){ } 其实是var Foo = new Function(...)
    
    使用instanceof判断一个函数是否是一个变量的构造函数
    
```

```javascript

    function Foo(name,age) {
        this.name = name
        this.age = age
        this.class = 'class-1'
        //return this // 默认有这一行
    }
    var f = new Foo('zhangsan',20)
    
    // var f1 = new Foo('lisi',22)  //创建多个对象

````

- 原型规则和示例

```javascript

    var obj = {}
    
    obj.a = 100
    
    var arr = []
    
    arr.a = 100;
    
    function fn() {
    
    }
    
    fn.a = 100;
    
    
    console.log(obj.__proto__)
    console.log(arr.__proto__)
    console.log(fn.__proto__)
    console.log(fn.prototype)
    
    console.log(obj.__proto__ === Object.prototype)

````

当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么它会去它的__proto__ (即它的构造函数的prototype)中寻找。

````javascript

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


````

- 原型链

显示原型  隐形原型

- instanceof


## 面试题

---
### 1.  JS中使用typeof能得到的那些类型

    能得到6种类型
    
    typeof undefined //undefined
    typeof 'abc' //string
    typeof 123 // number
    typeof true //boolean
    
    typeof {} //object
    typeof [] //object
    typeof null //object
    typeof console.log // function

注意点：typeof 只能区分值类型的详细类型。但是typeof 针对于引用类型则是无能为力了。
引用类型是可以扩展的。


### 2. 何时使用 === 何时使用 ==

    //问题：何时使用  ===  何时使用 ==
    
    if (obj.a == null ){
        //这里相当于obj.a === null || obj.a === undefined,简写形式
        //这是jquery 源码中推荐的写法
    }

### 3. JS中有哪些内置函数

    Object
    Array
    Boolean
    Number
    String
    Function
    Date
    RegExp
    Error

### 4. JS变量按照存储方式区分为哪些类型，并描述其特点
    
    值类型
    引用类型
    
### 5. 如何理解JSON

     JS 只不过是一个JS对象而已
     一种数据格式
     
     JSON.stringify({a:10,b:20})
     JSON.parse(''{"a":10,"b":20}')

### 6. JS中typeof能得到的哪些类型？


### 7. 何时使用 === 何时使用 ==？


### 8. window.onload 和 DOMContentLoaded的区别？


### 9. 用JS创建10个<a>标签，点击的时候弹出来对应序号？


### 10. 简述如何实现一个模块加载器，实现类似require.js的基本功能？


### 11.实现数组的随机排序？


### 12.如何准确判断一个变量是数组类型

    var arr = []
    
    arr instanceof Array  //true
    
    typeof arr  // object, typeof 是无法判断是否是数组的



### 13.写一个原型链继承的例子

````javascript

    //动物
    function Animal() {
        this.eat = function () {
            console.log('animal eat');
        }
    }
    
    //狗
    
    function Dog() {
        this.bark = function () {
            console.log('dog bark');
        }
    }
    
    Dog.prototype = new Animal()
    
    // 哈士奇
    
    var hashiqi = Dog()
    
    //接下来代码演示时，会推荐更加贴近实战的原型继承示例！

````

````javascript
function Elem(id) {
    this.elem = document.getElementById(id)
}

Elem.prototype.html = function (val) {
    var elem = this.elem
    if (val){
        elem.innerHTML = val
        return this  //链式操作
    }
    else
    {
        return elem.innerHTML
    }
}

Elem.prototype.on = function (type, fn) {
    var elem = this.elem
    elem.addEventListener(type, fn)
    return this
}

var div1 = new Elem('div1')

// console.log(div1.html());

div1.html('<p> hello imooc </p>')

div1.on('click',function () {
    alert('clicked')
})

```
面试的时候要写这样的例子

### 14.描述new一个对象的过程
    
    创建一个新对象
    this指向这个新对象
    执行代码，即对this赋值
    返回this

### 15.zepto(或其他框架)源码中如何使用原型链
