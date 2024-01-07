const mongoose = require('mongoose');

const DB = process.env.Database_url

mongoose.connect(DB).then(()=>{
    console.log('datebase is connect');
}).catch((err)=>{
    console.log('database is not connect'+err);
})
