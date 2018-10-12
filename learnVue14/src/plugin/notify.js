import modal from './notify.vue'
let notify = {   //需要在此对象中拥有一个install方法

}

notify.install = function (Vue,options={delay:3000}) {

    Vue.prototype.$notify = function (message,opt={}) {

        if (notify.el) return

        options = {...options,...opt}

        let V = Vue.extend(modal) //返回的是一个构造函数的子类，参数是包含组件选项的对象

        let vm = new V

        let oDiv = document.createElement('div')

        vm.$mount(oDiv)

        document.body.appendChild(vm.$el)

        notify.el= vm.$el

        setTimeout(()=>{

            document.body.removeChild(vm.$el)

            notify.el = null

        },options.delay)
    }
}
//导出这个包含install的对象，如果使用Vue.use 就会调用这个install  方法
export default notify
