//
// if (true){
//     var name = 'zhansan'
//     console.log(name);
// }


function F1() {
    var a = 10
    return function () {
        console.log(a);
    }
}

var f1 = F1()

var a = 200
f1()

function F2(fn) {
    var a = 200
    fn()
}


