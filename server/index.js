const bodyParser = require('body-parser'),
    express = require('express'),
    massive = require('massive');

const cont =require('./controller') 
require('dotenv').config();
const app = express();
let db;

app.use(bodyParser.json());







const port =   process.env.PORT||8091;
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
    });
}).catch(err=>{
    console.log('Error connecting to databse', err.message)
})

//Endpoints

app.get('/api/inventory',(req,res,next)=>{
    const db =req.app.get('db');
    db.getProducts().then(result=>{
        res.send(result)
    })
   
})
