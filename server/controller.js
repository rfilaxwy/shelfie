
module.exports = {
    create:(req,res)=>{
        //res.send(req.body)
        //console.log(req.body)
        const {name, price, img}=req.body;  
        const db = req.app.get('db')
        db.create_product(name,price,img).then(result=>{
            db.get_inventory().then(result=>{
            res.status(200).send(result)})
        })
   },
    read:(req,res)=>{
        const db =req.app.get('db');
        db.get_inventory().then(result=>{
            res.status(200).send(result)
        })
    },
    update:(req,res)=>{
        const db = req.app.get('db');
        const rp =req.params;
        const rb =req.body;
        console.log(rp);
        console.log(rb)
        if(rp.id==0){
            db.create_product(name,price,img).then(result=>{
                db.get_inventory().then(result=>{
                res.status(200).send(result)})
            })
        } else{
            db.update_product(rp.id,rb.name,rb.price,rb.img).then(result=>{
                db.get_inventory().then(result=>{
                    res.status(200).send(result)
                    })
                })
            }
    },
    delete:(req,res)=>{
        
        const db =req.app.get('db');
        db.delete_product(req.params.id).then(result=>{
            db.get_inventory().then(result=>{
                res.status(200).send(result)
            })
        })
    }
}