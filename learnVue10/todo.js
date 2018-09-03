let vm = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                isSelected: false,
                title: '睡觉'
            },
            {
                isSelected: true,
                title: '吃饭'
            }
        ],
        title: "",
        curr: ''

    },
    computed: {
        count(){
            return this.todos.filter(item=>!item.isSelected).length
        }
    },
    filters: {

    },
    created(){
        if (JSON.parse(localStorage.getItem('data'))) {
            this.todos = JSON.parse(localStorage.getItem('data'))
        }
    },
    watch: {
        todos: {
                //watch 默认只监控一层的数据变化，深度监控
            handler(){
                //默认存的是字符串
                localStorage.setItem('data',JSON.stringify(this.todos))
            },
            deep:true
        }
    },
    methods: {
        add() {
            this.todos.push({
                isSelected: false
                , title: this.title
            })
            this.title = ""

        },
        remove(todo) {
            this.todos = this.todos.filter(item => item !== todo)
        },
        remember(todo){ //当前传递的是todo(当前点击的这一项)
            this.curr = todo
        },
        cancel(){
            this.curr = ""
        }
    },
    directives:{
        focus(el,bindings){
            if (bindings.value){
                el.focus()
            }
        }
    }
})


