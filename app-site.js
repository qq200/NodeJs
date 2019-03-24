// routing -ruta, drum
const http=require('http');
const fs=require('fs');
const port=7777;
const server=http.createServer(handle);
    server.listen(port);
function getPage(name){
    return fs.readFileSync(`./html/${name}.html`).toString().replace('{{title}}',name);
}
function handle(req,res){
   res.write(getPage('top'));
   res.write(getPage('nav'));
    if(req.url=='/'){
        res.write(getPage('home'));
    }
    if(req.url=='/about'){
        res.write(getPage('about'));
    }
    if(req.url=='/contact'){
        res.write(getPage('contact'));
    }
    
    res.end(getPage('buttom'));
}