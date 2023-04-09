const express = require("express");
require('dotenv').config();

const path = require('path');
const dt = require('./my_modules/my_first_module');

const app = express();
const port = process.env.PORT || 3001;

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'));
    console.log("date:"+dt.myDateTime());


});

app.get("/try/",(req,res)=>{

    //res.sendFile(path.join(__dirname,'index.html'));
    res.send(dt.myDateTime());
    console.log("date:"+dt.myDateTime());
    console.log("next");

});

app.get("/key/",(req,res)=>{
    res.send(process.env.my_first_key);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));