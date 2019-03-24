// routing -ruta, drum
const http=require('http');
const port=7777;
var clicks=0;
const server=http.createServer(handle);
    server.listen(port);

function handle(req,res){
    console.log('client->request'+ req.url);
    clicks++;
    res.write(`
    <a href="/">Home</a>
    <a href="/about">About Us</a>
    <a href="/contact">Contact Us</a>
    `);
    res.write('viwed' + clicks + 'times');
    if(req.url=='/'){
        res.write('<h1>Home</h1>');
    }
    if(req.url=='/about'){
        res.write('<h1>About Us</h1>');
    }
    if(req.url=='/contact'){
        res.write('<h1>Contact Us</h1>');
    }
    res.end();
}