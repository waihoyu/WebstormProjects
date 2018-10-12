// document.write('你好')
// import  Vue from 'vue'
// import  App from './App.vue'
// new Vue({
//     // template:'<div>hello</div>div>'
//     render:function (createElement) {
//         return createElement(App)
//     }
// }).$mount('#app')

import Vue from 'vue'
import  App from './App.vue'
import  router from './router/index.js'

import notify from './plugin/notify.js'

Vue.use(notify,{
    delay:2000
})

new Vue({
    el: "#app",
    router,
    render: h=>h(App)
})
