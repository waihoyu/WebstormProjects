
import Vue from 'vue'
import Home from '../components/Home.vue'
import List from '../components/List.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)  //和以前不一样的地方引入router必须使用use

export  default  new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List}
    ]
})
