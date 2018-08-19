
function ajax({url='',type='get',dataType='json'}) {
    return new Promise((resolve,reject)=>{
        let xhr = new  XMLHttpRequest()
        xhr.open(type,url,true)
        xhr.responseType = dataType
        xhr.onload = function () {
            //xhr.readState = 4
            //xhr.status = 200
            resolve(xhr.response)
        }
        xhr.onerror = function(err){
            reject(err)
        }
        xhr.send()
    })
}
ajax({url:'./carts.json'}).then()
