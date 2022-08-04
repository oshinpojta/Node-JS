let { people } = require('../data');

const getPeople = (req,res)=>{
    res.status(200).send({success : true, data : people});
}

const postPeople = (req,res)=>{
    const {name} = req.body;
    console.log(req.body);
    console.log(name);
    if(!name){
        return res.status(401).send("Please provide name");
    }else{
        const p = {
            "id" : people.length+1,
            "name" : name,
        }
        people.push(p);
        console.log(people);
        return res.status(200).send(`Welcome ${name}`);
    }
}

const updatePeople = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    products.forEach((product)=>{
        if(product.id==id){
            product.name = name;
        }
    })
    console.log(products);
    res.json({success : true, data : products});
}

const deletePeople = (req,res)=>{
    const {id} = req.params;
    let newproducts = products.filter((product)=>product.id!=id);
    products = newproducts;
    console.log(products);
    res.json({success : true, data : products});
}

module.exports = {getPeople, postPeople, updatePeople, deletePeople};