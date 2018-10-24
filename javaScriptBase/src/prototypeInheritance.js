//动物
function Animal() {
    this.eat = function () {
        console.log('animal eat');
    }
}

//狗

function Dog() {
    this.bark = function () {
        console.log('dog bark');
    }
}

Dog.prototype = new Animal()

// 哈士奇

var hashiqi = Dog()

//接下来代码演示时，会推荐更加贴近实战的原型继承示例！

