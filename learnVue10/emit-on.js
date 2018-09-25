

//  发布 emit  订阅 on  { 女生失恋：['哭'，‘购物’，‘吃’]}


function Girl(){

    this._events = { }

}

Girl.prototype.on =  function(eventName,callback){

    //  [].slice.call(arguments)
    //  Array.from(arguments).slice(1)

    if(this._events[eventName]){
        this._events[eventName].push(callback)
    }
    else {
        this._events[eventName] = [callback]
    }
}

Girl.prototype.emit =  function(eventName,callback){
    if (this._events[eventName]){
        this._events[eventName].forEach(cb=>cb())
    }
}

let girl = new Girl()

let cry = () => {
    console.log('哭')
}

let shopping = () => {
    console.log('购物')
}

let eat = () => {
    console.log('吃')
}

girl.on('失恋',cry)

girl.on('失恋',eat)

girl.on('失恋',shopping)

girl.emit('失恋')
