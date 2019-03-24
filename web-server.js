// http
/// node(server) <----comunication---> browser

var http=require('http'); //instrument de comunicare http
var server=http.createServer(function(req,res){
    res.write("<h1>node JS</h1>");
    res.write("<script>alert('ok')</script>");
    res.end("OK!");
});
server.listen(7777);  //porturile de la 1000+