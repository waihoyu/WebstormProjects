import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import Collect from '../components/Collect'
import Detail from '../components/Detail'
import List from '../components/List'

export default new Router({
  routes: [
    {
      path:'/home',component:Home
    }
  ]
})
