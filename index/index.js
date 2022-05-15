const http = require("http");
http.createServer(function(req,res){
    res.end("hellp")
}).listen(3101,function(){
    console.log("assus")
});