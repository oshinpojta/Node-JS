const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user==='john'){
        req.user = {name : 'john', id : 3};
        console.log('Authorized!');
        next();
    }else{
        console.log('Unauthorized!');
        res.status(401).send("Unauthorized");
        next();
    }
    
}

module.exports = authorize;