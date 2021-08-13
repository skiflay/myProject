const express = require('express');
const router = express.Router();
const { ObjectID } = require('mongodb')


router.put('/:id',(req, res)=>{
    console.log(req.body)
  req.db.collection('users').updateOne({_id: new ObjectID(req.paramas.id) },{'$set': req.body})
  .then(data=>{
       res.json({status: 'success'})
  })
})



module.exports = router;