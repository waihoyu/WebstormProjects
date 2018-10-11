
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

## 钩子函数
```bash
钩子函数声明周期

1.liftcycle

```

```

## REF
```bash

this.$data vm上的数据

this.$watch 监控

this.$el 当前el元素

this.$set 后加的属性实现响应变化

this.$options vm上的所有属性

this.$nextTick   //异步方法  等待渲染dom完成后 来获取vm

this.$refs   所有ref的集合

```


## component 组件化
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
## component
 ```bash
//局部组件  使用的三部曲  1.创建这个组件  2. 注册这个组件    3.使用这个组件

//组件是相互独立的  不能直接跨作用域，实例也是一个组件，组件中拥有声明周期函数

如果组件共用了数据，会导致同时更新（独立性）

子组件不能直接使用父组件的数据 （组件之间的数据交互）

组件 理论上可以无限嵌套的

```

## 发布订阅者模式
```bash



```

## emit
```bash
<!--父亲绑定一些事件，儿子触发这个事件， 将参数传递过去  单向数据流， 父亲数据刷新 儿子就刷新-->
<!--触发自己的自定义事件，让父亲的方法执行-->

```

## slot

```bash

模板中只能有一个根元素
slot 作用  定制模板

模板中只能有一个跟元素，可以通过元素属性定制模板

slot 中可以放置 一些默认的内容，如果传递了内容则替换掉

如果没有名字的标签默认放置到default中

如果要给插槽添加事件：放的内容均属于父级当前模板的  只有属性名是属于组件的

父传子  子 传父



父调用子组件的方法


```

## 父掉子
```bash
父组件调用子组件的方法

        <div id="app">
            <loading ref="load"></loading>
        </div>

ref 如果放在组件上，获取的是组件的实例，并不是组件的dom元素

```

## 父调子
```bash
父组件调用子组件的方法

        <div id="app">
            <loading ref="load"></loading>
        </div>

ref 如果放在组件上，获取的是组件的实例，并不是组件的dom元素

```

## keep-live
```bash

 一般作缓存：为的是后面的路由做准备。如果缓存了就不会再走created mounted 这些钩子函数。
 
 如果子组件和父组件同时拥有 mounted，先走哪个呢？  要先走孩子
 需要等待子组件挂载完成后，再挂载子组件。先走child。
 
    <keep-alive>
        <component :is="radio"></component>
    </keep-alive>
    
    // this.$nextTick(()=>{
    //     console.log(this.$refs.child.$el.innerHTML);
    // })    

```
## eventBus
```bash

   

```


## 路由
```bash

   -访问不同的路径，就可以返回不同的结果。
   

```


## 多页开发 （spa）

```bash
- single page application
   前后端分离， 后端只负责提供接口供前端调用，像跳转都是前端自己处理的。
   hash模式  #
   h5的history.pushState()
   
   开发的时候要使用hash  不会导致404的问题  hash方式不支持seo
     
   上线的时候要用h5的   上线采用H5的跳转
    let home = {template:'<div>首页</div>'}

    let list = {template:'<div>列首页</div>'}

    let routes = [ //路由的映射表，  配置路径和组件的关系
        {
            path:'/home',component:home  //配置的关系就是页面级组件
        },
        {
            path:'/list',component:list  //路径必须加/
        }
    ]

    let router = new VueRouter({ //引入 vue-router  自带vueRouter类
        mode:'history',  //h5模式
        routes,
        linkActiveClass:'active'
    })
```
## 编程式导航  
```bash
编程式导航，在js跳转页面

    let home ={
        template: '<div>首页<button @click="toList">跳转到列表</button></div>',
        methods: {
            toList(){
                this.$router.push('/list')  //强制跳转路劲
                // this.$router.replace  路由的替换
            }
        }
    }
    let list ={
        template: '<div>列表<button @click="toHome">返回到上一级</button></div>',
        methods:{
            toHome(){
                console.log('log');
                this.$router.go(-1)  //返回某一级别
            }
        }
    }
    let routes = [
        {
            path: '/home',
            component: home
        },
        {
            path:'/list',
            component:list
        }
    ]
    let router = new VueRouter({
        routes
    })


```


## 多级路由的嵌套
```bash 
<div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/detail">详情</router-link>


    <router-view></router-view>
</div>

<template id="detail">
    <div>
        <router-link to="/detail/profile">简历</router-link>
        <router-link to="/detail/about">关于</router-link>
        <router-view></router-view>
    </div>
</template>


```

## 路由的参数params
```bash 

<div id="app">
    <router-link :to="{name:'pro',path:'/article',params:{c:1}}">商品1</router-link>
    <router-link to="/article/2">商品2</router-link>
    <router-link to="/article/3">商品3</router-link>
    <router-view></router-view>
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script src="./node_modules/vue-router/dist/vue-router.js"></script>
<script>
    let article = {
        template: '<div>第{{this.$route.params.c}}篇文章</div>',
        data(){
            return{

            }
        },
        watch:{
            $route(){
                alert('页面变化')
            }
        }
    }
    let routes = [
        {
            path:'/article/:c',
            component:article,
            name:'pro'
        }
    ]
    let router = new VueRouter({
        routes
    })

```

## JavaScript模块

```bash

- node模块的规范commonjs

- cmd seajs  amd requirejs

- umd 为了做兼容处理的

- esmodule es6 已经内置支持了模块化

    -  如何定义模块  一个js就是一个模块
    
    -  如何导出模块   export 
    
    -  如何使用模块    import

import  * as b from './a.js'

export default  a
import  xxx from  './b.js'

```

## Webpack的安装与使用
```bash

先下载webpack

npm install webpack -g

安装webpack或者less 最好 不要安装全局的，否则可能导致webpack的版本差异

在package.json 中配置一个脚本，这个脚本用的命令是webpack，会去当前的node_modules 下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js,webpack.js需要当前目录下有个名字叫webpack.config.js的文件，我们通过npm run build 执行的目录是当前文件的目录，所以会去当前目录下查找。

```

## babel转义es6 -> es5
```bash
- 安装babel
npm install babel-core  babel-loader --save--dev


```

## babel-preset-es2015 的安装
```bash
让翻译官拥有解析es6语法的功能

npm install babel-preset-es2015 --save-dev

```

## babel-preset-stage-0
- 解析es7语法
```bash

npm install babel-preset-stage-0 --save-dev


```


## 解析样式
```bash

npm install css-loader style-loader --save-dev

- css-loader  将css解析成模块，将解析的内容插入到style标签内（style-loader）

```

## less、sass、stylus(预处理语言)
```bash
-less-loader  less  css-loader style-loader

-sass-loader

-stylus-loader

npm install less less-loader --save-dev

```

## 解析图片
```bash

file-loader url-loader(是依赖于file-loader)


npm install file-loader url-loader --save-dev


 打包的入口文件，webpack会自动查找相关的依赖进行打包。
 模块的解析规则
 -js  匹配所有的js用 babel-loader 转义  排除掉node_modules
 转化base64只在8192字节一下转化。其他情况下输出图片   
    
```
