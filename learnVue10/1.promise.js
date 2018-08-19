let a = ""

function buy (fn) {
    fn(1)
    setTimeout(()=>{
        a = '蘑菇'
        fn(a)
    },2000)
}

buy(function cookie(val) {
    console.log(val)
})

//promise 解决回到问题的promise三个状态 成功态 失败态 等待

//回调函数  将后续的处理逻辑传入到当前要做的事情，事情做好后调用此函数

//成功态  失败态  等待态

let p = new Promise((resolve ,reject)=>{
    setTimeout(function () {
        let  a = '蘑菇'
        resolve(a)
    })
})

p.then((data)=>{console.log(data)},()=>{})


