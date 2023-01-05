const express = require('express')
const path = require('path');
const connectdb = require('./database/connection');
const body_parser=require('body-parser');
const app = express();
const port = 3000;
// mongodbconnection
connectdb();
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 
app.use(body_parser.json()); 
app.use('/',require(path.join(__dirname,'routes/homepage')));
app.use("/html",express.static(path.join(__dirname,"html")));
app.use("/css", express.static(__dirname + '/css'));  
app.use("/img", express.static(__dirname + '/img'));  
app.use("/js",express.static(__dirname + '/js'));  
// app.post("/publish",(req,res)=>{
//   try{
//     res.send(req.body);
//   }catch(err){
//     res.status(400).send(err);
//   }
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})