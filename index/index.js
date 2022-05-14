const http = require("http");
http.createServer(function(req,res){
    res.end("hellp Vrsyuk")
}).listen(3101,function(){
    console.log("assus")
});