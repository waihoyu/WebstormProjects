
## 事前准备

https://v3.bootcss.com/components/#nav-pills

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

### Vue 第三天的学习

```bash
v-cloak
[v-cloak]{display: none}

v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上

v-html 将html 字符串转化成html

v-for 循环（数组，对象，字符串，数字）

绑定给dom元素，函数需要定义在methods中，不能喝data里的内容重名，this指向的是实例，不能使用箭头函数，事件源对象如果不写括号，可以自动传入，否则只能手动传入 $event
```


### Vue 第四天的学习

```bash
<!--常见的样式，  基本样式  + 增强样式-->
<!--如果频繁的切换dom使用v-show,当数据一开始就确定下来使用v-if更好-->

v-if 和 v-show 的区别

只有dom从 显示到隐藏 或者隐藏到显示，才能使用vue的动画

动画的使用
 animate.css  动画的库

```

### Vue 第五天的学习

```bash
- v-model (如果checkbox,select多选是数组，提供一个value属性)（radio checkbox分组靠的是v-model）,checked selected 不存在
- 修饰符 .number .lazy
- 按键修饰符 .enter .ctrl .keyCode
- 事件
    - @事件.shop
    ```
        stopPropagation (阻止冒泡) cancelBubble = true
        stopPropagation 阻止事件传播

    ```
    - @事件.capture
    ```
        xxx.addEventListener('click',fn,true)

    ```
    - @事件.prevent
    ```
        xxx.addEventListener('click',fn,true)

    ```
    - jquery Once flag   @事件.once
    ```
        on('click')     off('click')

    ```
    - @事件.self
    ```
        e.srcElement && e.target 判断事件源绑定事件
    ```

    ```
        stopPropagation (阻止冒泡) cancelBubble = true
        preventDefault ,returnValue = false
    ```
- jquery Once flag
- e.srcElement && e.target 判断事件源绑定事件



```
## filters 实例上可以用 (共用filter)

```
{{'123' |  my(1,2,3)}}

filters:{
  my(){

       }
}
}

Vue.filter('my',(data) =>{
return 'jw' + data
})


```
##  computed 计算属性  不是方法
- 方法不会缓存，computed 会根据依赖（归vue管理的数据，可以响应式变化的）的属性进行缓存
- 两部分组成有get和set(不能只写set)  一般情况下 ，通过js 赋值影响其他人或者表单元素的时候会调用set方法
-

```bash

<script>
    let vm = new Vue({
        el:'#app',
        watch:{ //只有值变化的时候才会触发  支持异步了
            a(newVal,oldVal){//watch  的属性名字 要和观察的人的名字一致
                console.log(newVal  + ":" + oldVal)
                setTimeout(()=>{
                    if(newVal.length<3){
                        return this.msg = '太少'
                    }
                    if (newVal.length > 6){
                        return this.msg = '太多'
                    }
                    this.msg = ''
                },500)
            }
        },
        computed:{ //computed 默认调用get方法，必须要有return
            // msg:{//如果写了set方法，并且val给了别人，那当前的a就不会被赋值结果了
            //     //不支持异步
            //     get(){
            //         return this.a
            //     }
            // }
        },
        methods:{

        },
        data:{
            a:'',
            msg: ''
        }
    })
</script>

```

```bash

template 标签  只能在v-if 上使用

在默认情况下，在切换dom时相同的结构会被服用，如果不需要复用，需要加key

v-if

v-show

v-bind   简写是 冒号


动态绑定 “属性”  class 绑定的样式 和 class 绑定的不冲突 :class = "{z:flag}"

:class=[class1, class2]
:style=""

```

## 实现单页面开发的方式

```bash

路由  vue-router

- 通过hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方法 history  ( history.push() )可能会导致404错误

history.pushState('','','/d')

> 开发时使用hash方式，上线的话，我们使用history的方式


```
## 实指令是用来操作DOM的

```bash
实指令是用来操作DOM的

directives:{
focus(el,bindings){
if (bindings.value){
el.focus()
}
}
}

watch 深度监控

```

```bash
hashchange


//监控hash值的变化
window.addEventListener('hashchange',()=>{
console.log(window.location);
},false)



```

钩子函数
```bash
钩子函数声明周期

1.liftcycle

```

```

REF
```bash

this.$data vm上的数据

this.$watch 监控

this.$el 当前el元素

this.$set 后加的属性实现响应变化

this.$options vm上的所有属性

this.$nextTick   //异步方法  等待渲染dom完成后 来获取vm

this.$refs   所有ref的集合

```


component 组件化
```bash
 分类：页面级别组件
    1.一个页面是一个组件
    2.将可复用的部分抽离出来，  叫基础组件
    3.

    优点：
    提高开发效率
    方面重复使用
    便于协同开发
    更容易被管理和维护

    一个自定义标签 vue就会把他看成一个组件，不包含在：div  p span  a  header section
    vue可以给这些标签赋予一定的意义


```
