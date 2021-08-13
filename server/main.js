
const mongodb = require("mongodb");
const express = require("express");
const cors = require('cors');
const {ObjectId} = require('mongodb');

const conn = mongodb.MongoClient;
const url = "mongodb+srv://simon:test123@cluster0.wkrdr.mongodb.net/onlineBooks";
let collection;

const app = express();


app.use(cors())             
app.use(express.json()) 

        conn.connect(url, async function (err, client) {
            if(err) throw err;
            const db = client.db("onlineBooks");            
            collection = db.collection("books");
            
            let query = {};
            let cursor = await collection.find(query).toArray();
            app.get('/books', (req, res)=>{
                res.json(cursor);
            }) 
               
        });

     app.post('/books',(req, res)=>{
        console.log(req.body);
        collection.insertOne(req.body).then(data=>{
          res.json({status: 'success'});
        })
      })
     


     app.listen(3000, ()=> console.log('server is running'));


