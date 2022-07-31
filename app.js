///HTTP

const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome to Server")
        res.end()
    }else{
        res.write("<h1>Welcome to Other Server</h1>");
        res.end();
    }
})
server.listen(5000);

const loaddash = require('loadash');
