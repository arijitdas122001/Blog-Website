const mongoose=require('mongoose');
const dotenv=require('dotenv');
const path=require('path');
mongoose.set("strictQuery",false);
let envstring=dotenv.config({path:'views/env/config.env'});   
// console.log(envstring);
const connectdb=async ()=>{
    try {
        const con = await mongoose.connect(envstring.parsed.MONGO_URL,{
            //must add in order to not get any error masseges:
            useunifiedtopology:true,
            usenewurlparser: true,
        })
        console.log(`Mongodb connected ${con.connection.host}`);
        // console.log(envstring.parsed);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectdb;