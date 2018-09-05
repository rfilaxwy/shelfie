

module.exports = {
    create:(req,res)=>{
        //res.send(req.body)
        console.log(req.body)
        const {name, price, img}=req.body;  
        const db = req.app.get('db')
        db.create_product(name,price,img).then(result=>{
            db.get_inventory().then(result=>{
            res.send(result)})
        })
   },
    read:(req,res)=>{
        const db =req.app.get('db');
        db.get_inventory().then(result=>{
            res.status(200).send(result)
        })
    }
    // update:
    // delete:
}