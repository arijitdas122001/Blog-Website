const mongoose=require('mongoose');

const scheme=new mongoose.Schema({
    title: { type: String, required: true},
    author: { type: String, required: true},
    desc:  {type:String,required: true},
    date:{ type:String,require:true},
    readtime: {type:String,required:true},
    
});
const userdb=mongoose.model('mongs',scheme);
module.exports=userdb; 