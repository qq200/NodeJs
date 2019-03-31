// arrow functions
let loadCurrencies=()=>{
    let data=require('./data/currency.json');
    return data
}
let apiCurrencyList=(req, res)=>{
    //caile 
    if(req.url=='/currencies'){
        res.end(JSON.stringify(loadCurrencies()))
    }else if(req.url.startsWith('/currency/')){
        //extragem codul din url
        let code=req.url.split('/').pop();
        let data=loadCurrencies();
        for( let i=0; i<data.length; i++){
            if(data[i].code==code){
                res.write(JSON.stringify(data[i].value));
                break;
            }
        }
        res.end();
    } else{
        res.writeHead(404,{
            //alte headers
        })
        res.end(http.STATUS_CODES[404])
    }   
}
///////// http server//////////
let http  =require('http');
let server=http.createServer(apiCurrencyList);
    server.listen('7777');


console.log(loadCurrencies())
