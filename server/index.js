const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
app.use(cors())
dotenv.config({path:'./config.env'})
require('./db/conn')
app.use(express.json())

app.use(require('./route/route'))
const PORT = 8000;






app.listen(PORT,()=>{
    console.log('server is open at localhost:'+PORT);
})

