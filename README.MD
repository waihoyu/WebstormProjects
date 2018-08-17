
## 自学笔记
### Vue 第一天的学习
```bash
1）数组的相关知识点
操作数组的方法 pop push unshift shift
splice reverse sort indexOf lastIndexof concat slice
数组的变异（括号中的能改变原数组）
forEach filter(过滤) map（映射） some every reduce (includes find es6)
//怎么封装一个foreach
//声明式  和  编程式

1）forEach 不支持return
2) for in 打印 数组的私有属性
3）for of  支持return  植物

reduce 实现扁平化数组
arrow fn 不具备this,arguments
自己家没有this 就找上一级的this
2）this的指向问题
如何更改this指向
1) call apply bind
2) var that = this
3) =>
//如何确定this 是谁  看谁调用的 . 前面是谁this就是谁
3）高级函数的使用
箭头函数怎么写呢？
去掉function关键字
参数有一个可以省略小括号， 小括号和大括号之间有一个箭头
如果没有大括号则直接是返回值，有大括号必须写return
4）闭包
函数执行的一瞬间叫闭包（不销毁的作用域），当执行后返回的结果必须是引用数据类型。
被外界变量接受，此事这个变量不会销毁（模块化）。
在Vue中，很多时候不能用箭头函数。

5）框架和库
框架vue
库 jquery underscore zepto animate.css
渐进式 渐进增强
通过组合，完成一个完成的框架
vuejs vuex vue-router axios
对渐进式的理解
声明式渲染（无需关心如何实现）
组件系统
客户端路由
大规模状态管理
构建工程
MVVM 双向的

Object.defineProperty

安装vue
使用cdn
使用npm

小胡子  moustache  表达式  可以放三元表达式、赋值、取值 三元

```
### Vue 第一天的学习补充
```bash
<script>
    let obj = {}
    let temp = {}

    Object.defineProperty(obj,'name',{
        get(){//取obj的name属性会触发
            return  temp['name']
        },
        set(val){
            temp['name'] = val
            input.value = obj.name
        },
        configurable:true, //是否可删除
        //writable:true, //是否可重新赋值
        enumerable:true,//是否可枚举
        //value:1
    })
    input.value = obj.name
    input.addEventListener('input',function () {
        obj.name = this.value
    })
    //delete obj.name
    for (let key in obj)
    {
        console.log(key);
    }
</script>
```

### Vue 第二天的学习

1)键盘修饰符


```bash

<body>
<div id="app">
    <input type="text" v-model="val" @keyup.enter="add">
    <ul>
        <li v-for="(item,index) in arr">{{item}}<button @click="remove(index)">删除</button></li>
    </ul>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    let vm = new Vue({
        el:'#app',
        methods:{
            add(e){
                if (e.keyCode === 13) {
                    this.arr.unshift(this.val)
                    this.val = ""
                }
            },
            remove(i){
                this.arr = this.arr.filter((item,index) => {
                    return index !== i
                })
            }
        },
        data:{
            arr:[],
            val:''
        }
    })
</script>
</body>


```
