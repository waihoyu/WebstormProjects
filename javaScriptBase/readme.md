#  JavaScript 前端基础面试题

## 知识点

---
> 变量类型

 **  1、 值类型 VS 引用类型 **  

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

>  变量计算  -- 强制类型转换

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
   
   console.log(10 && 0) //0
   console.log(‘’ || ‘abc’) // 'abc'
   console.log(!window.abc) //true
   
   //判断一个变量会被当做true 还是 false
   
   var a = 100
   console.log(!!a)
   
   
>  原型和原型链-构造函数

- 构造函数

    function Foo(name,age) {
        this.name = name
        this.age = age
        this.class = 'class-1'
        //return this // 默认有这一行
    }
    
    var f = new Foo('zhangsan',20)
    
    // var f1 = new Foo('lisi',22)  //创建多个对象

构造函数-扩展

原型规则和示例

原型链

instanceof


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



### 13.写一个原型链继承的例子



### 14.描述new一个对象的过程


### 15.zepto(或其他框架)源码中如何使用原型链
