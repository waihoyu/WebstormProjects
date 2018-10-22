let http = require('http')

let fs = require('fs')

let url = require('url')

let sliders = require('./sliders')

function read(cb){
  fs.readFile('./book.json','utf8',function (err,data) {
    if (err || data.length == 0){
      cb([]);
    }else{
      cb(JSON.parse(data));
    }
  });
}

read(function (books) {
  console.log(books);
});

http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
  let {pathname,query} = url.parse(req.url)
  if(pathname === '/sliders') {
    res.setHeader('Content-Type','application/json;charset=utf8')
    return res.end(JSON.stringify(sliders))
  }
  if(pathname === '/hot'){

  }
}).listen(3000)
