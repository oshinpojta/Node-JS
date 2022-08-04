const os = require('os')
const path = require('path')
const {readFileSync, writeFileSync, readFile} = require("fs");

const names = require("./names");
const sayHi = require("./function");

console.log(names.allen);
sayHi(names.allen);
sayHi(names.john);

/////BUILT-IN
console.log(os.userInfo())
let sec = os.uptime();
console.log(path.sep)

const filepath = path.join('/content','subfolder','text.txt')
console.log(filepath);

const basepath = path.basename(filepath);
console.log(basepath);

const absolutepath = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolutepath)


///FILE IO
    ///SYNC
const first = readFileSync('./content/first.txt','utf-8')

writeFileSync('./content/result.txt',
    `Here is the result ${names.john}\n`,{flag : 'a'})

       //ASYNC
readFile('./content/result.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return 
    }else{
        console.log(result);
    }
})


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


//PROMISES

const {readFile, writeFile} = require("fs");
//const {readFile, writeFile} = require("fs").promises;  //makes variables directly promises to use with await
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try{
        const first = await readFilePromise('./content/first.txt','utf-8');
        await writeFilePromise('./content/result.txt',' Hello World ',{flag : 'a'})
        console.log(first);

    }catch(error){
        console.log(error);
    }
}

start()



// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//             readFile(path,'utf-8',(err,data)=>{
//                 if(err){
//                     reject(err)
//                 }else {
//                     resolve(data)
//                 }
//             })
//         })
// }

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err));

// EVENT EMITTER
const EventEmitter = require('events');


const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log("data received "+name+" "+id);
});
customEmitter.on('response', ()=>{
    console.log("another instance of response without arguments/parameters");
});
customEmitter.emit('response','john',23);

/// STREAMS (for bigger files etc)
const {createReadStream} = require('fs');
const stream = createReadStream('./content/first.txt','utf-8');
stream.on('data',(result)=>{
    console.log(result);
})
stream.on('data',(err)=>{
    console.log(err);
})

var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./content/first.txt','utf-8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })
})


////HTTP
const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('./node-express-course-main/02-express-tutorial/navbar-app/index.html');
const homeStyle = fs.readFileSync('./node-express-course-main/02-express-tutorial/navbar-app/styles.css');
const homeLogo = fs.readFileSync('./node-express-course-main/02-express-tutorial/navbar-app/logo.svg');
const homeScript = fs.readFileSync('./node-express-course-main/02-express-tutorial/navbar-app/browser-app.js');


const aboutPage = fs.readFileSync('./about.html');
const servers = http.createServer((req,res)=>{
    console.log("server called !");
    const url = req.url;
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
    }else if(url==='/about.html'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(aboutPage);
    }else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyle);
    }else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homeLogo);
    }else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homeScript);
    } else{
        res.writeHead(404,{'content-type':'text/html'});
        res.write("<h1> 404 : Page Not Found !</h1>")
    }
    
    res.end();

}).listen(5000);