function fn(){
    console.log(arguments.callee)
}

fn(1)
