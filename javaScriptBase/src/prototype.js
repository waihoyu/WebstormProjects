var obj = {}

obj.a = 100

var arr = []

arr.a = 100;

function fn() {

}

fn.a = 100;


console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)
console.log(fn.prototype)

console.log(obj.__proto__ === Object.prototype)
