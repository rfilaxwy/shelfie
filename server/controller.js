

module.exports = {
    create:(req,res)=>{

    },
    read:(req,res)=>{
        const db =req.app.get('db');
        db.get_Inventory().then(result=>{
            res.status(200).send(result)
        })
    }
    // update:
    // delete:
}