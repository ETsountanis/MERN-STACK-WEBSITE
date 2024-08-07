//Dino access sto .ENV
require('dotenv').config();

const express = require('express');

const app = express();


//routes 

app.use((req , res , next )=> {
    console.log(req.path,req.method)
    next();
})

app.get('/', (req,res) =>{
    res.json({msg: 'welcome to the app '})
})

app.listen(process.env.PORT, ()=> {
    console.log(`listening on port ${process.env.PORT}`);
})