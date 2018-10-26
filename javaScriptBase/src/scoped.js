//全局

console.log(a)

var a = 100

fn('waihoyu')

function fn(name) {
    age = 20
    console.log(name,  age)
    var age
}




//this

//this 要在执行时才能确认值，定义时无法确认

var a ={
    name:'A',
    fn:function () {
        console.log(this.name);
    }
}

a.fn() //this === a

a.fn.call({name:'B'})  //this === {name:'B'}

var fn1 = a.fn

fn1()  //this === window




