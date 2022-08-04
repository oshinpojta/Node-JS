const express = require('express');
const app = express();

const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended : false}))
app.use(express.json());

app.use('/api/people', people);
app.use('/login', auth);



app.listen(5000,(req,res)=>{
    console.log("Server is Listening");
})



//MIDDLEWARE 
// const logger = require('./logger');
// const authorize = require('./authorize');

// app.use('/api',[authorize, logger]); // /api/* invoke

// app.get('/', (req,res)=>{
//     res.send("Hello Home Page")
// })

// app.get('/api/about',(req,res)=>{
//     res.send("Hello About");
// })



// const {products} = require('./data');

// app.get('/',(req,res)=>{
//     res.send("Home Page");
// })

// app.get('/api/products',(req,res)=>{
//     const filterProducts = products.map((product)=>{
//         const {id,name,image } = product;
//         return {id, name, image}
//     })
//     res.json(filterProducts);
// })

// app.get('/api/v1/query',(req,res)=>{
//     const {search, limit} = req.query;
//     let sortedProducts = [...products];
//     if(search){
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search);
//         })
//     }
//     if(limit){
//         sortedProducts = sortedProducts.slice(0,Number(limit));
//     }

//     return res.status(200).json(sortedProducts);
// })

//Request Params
// app.get('/api/products/:productID',(req,res)=>{
//     const {productID} = req.params;
//     const singleProduct = products.find((product)=>product.id===Number(req.params.productID));
//     if(!singleProduct){
//         return res.status(404).send("Product not found");
//     }
//     res.json(singleProduct);
// })



// const express = require('express');
// const app = express();
// const path = require('path');

// app.use(express.static('./static'));


// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource Not Found!</h1>')
// })

// app.listen(5000,()=>{
//     console.log("Server Listening !");
// });

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./node-express-course-main/02-express-tutorial/navbar-app/index.html'))
// })

// app.get('/about.html',(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname,'./about.html'));
// })