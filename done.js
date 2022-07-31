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
