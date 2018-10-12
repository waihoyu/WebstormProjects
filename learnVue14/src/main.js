document.write('你好')
import  Vue from 'vue'
import  App from './App.vue'
new Vue({
    // template:'<div>hello</div>div>'
    render:function (createElement) {
        return createElement(App)
    }
}).$mount('#app')

