const { find } = require('../model/model');
var userdb=require('../model/model');

//creating the blog
exports.create=async(req,res)=>{

    //validate the function 
   if(!req.body){
    res.status(400).send({message:'This field can no empty'});
    return;
   }


    // new user
    // console.log(req.body);
    const user=new userdb({
     title:req.body.title,
     author:req.body.author,
     desc:req.body.desc,
     date:req.body.date,
     readtime:req.body.readtime
    });
    try{
      const use=await user.save();
      // res.json(user);
      // res.redirect("/publish");
    }
    catch(err){
        console.log(err);
    }
}
// Find 
exports.find=(req,res)=>{
userdb.find().then(user=>{
  res.send(user);
})
.catch(err=>{
  res.status(500).send({message:err.message|| "Ther is an error in find function"});
})
}

