const bodyParser = require('body-parser'),
    express = require('express'),
    massive = require('massive'),
    controller = require(__dirname+'/controller.js');
    cors =require('cors');

const cont =require('./controller') 
require('dotenv').config();
const app = express();
let db;

app.use(cors());
app.use(bodyParser.json());



const port =   process.env.SERVER_PORT;
massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db',db);
    app.listen(port,()=>{
        console.log(`Listening on port ${port}`)
    });
}).catch(err=>{
    console.log('Error connecting to databse', err.message)
})

//Endpoints

app.get('/api/inventory',controller.read);
app.post('/api/products', controller.create);
// app.get('/api/inventory', (req,res)=>{
//     const db =req.app.get('db');
//     db.getProducts().then(result=>{
//         res.status(200).send(result)
//     })
// })