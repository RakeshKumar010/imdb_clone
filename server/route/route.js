const express = require('express')
const app = express.Router()
const favMovie = require('../schema/favMovie')

app.post('/favmovie',async(req,res)=>{
    let result = new favMovie(req.body)
    result = await result.save()
    res.send(result)
})
app.put('/favmovie',async(req,res)=>{
    let result =await favMovie.updateOne({_id:req.body._id},{$set:req.body})
 
    res.send(result)
    console.log(result);
    console.log(req.body._id);
    console.log(req.body.userRating);
})
app.delete('/favmovie', async (req, res) => {
    const title = req.body.title;
  
    let result = await favMovie.deleteOne({ title: title });
  
    if (!result) {
      res.status(404).send('No movie found with the given title');
    } else {
      res.send(result);
    }
  });

  app.get('/favlist',async(req, res)=>{
    let result = await favMovie.find()
    res.send(result)
  })

app.get('/',(req,res)=>{
    res.send({
        name:'Rakesh Kumar'
    })
})


module.exports = app;