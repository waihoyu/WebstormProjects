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
        curr: '',
        hash: ''
    },
    computed: {
        count(){
            return this.todos.filter(item=>!item.isSelected).length
        },
        filterTodos(){
            if (this.hash === 'all'){
                return this.todos
            }
            if (this.hash === 'finish'){
                return this.todos.filter(item=> item.isSelected)
            }
            if (this.hash === 'unfinish'){
                return this.todos.filter(item=> !item.isSelected)
            }
            return this.todos
        }
    },
    filters: {

    },
    created(){
        if (JSON.parse(localStorage.getItem('data'))) {
            this.todos = JSON.parse(localStorage.getItem('data'))
        }
        //监控hash值的变化     如果页面已经有hash，重新刷新页面也要获取hash值
        this.hash = window.location.hash.slice(2) || 'all'
        window.addEventListener('hashchange',()=>{
            this.hash = window.location.hash.slice(2) || 'all'
        },false)

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


