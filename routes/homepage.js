const express = require('express')
const path = require('path')
const controller=require('../database/controller');
const userdb = require('../model/model');
const body_parser = require('body-parser');
const axios=require('axios');
const { triggerAsyncId, AsyncLocalStorage } = require('async_hooks');
const { rsort } = require('semver');
const { json } = require('body-parser');
const app = express()
const router = express.Router();
const port = 3000
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../html/index.html'))
    axios.get("http://localhost:3000/formsubmit").then(function(response){
        // console.log(response);
        res.render('../views/ejs/index',{user:response.data}); 
    }).catch(err=>{
        res.send(err);
    })
});
router.get('/home', (req, res) => {
    axios.get("http://localhost:3000/formsubmit").then(function(response){
        console.log(response);
        res.render('../views/ejs/index',{user:response.data}); 
    }).catch(err=>{
        res.send(err);
    })      
})
router.get('/connect', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/connect.html'));
})
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/contact.html'));
})
router.get('/publish', (req, res) => {
    res.sendFile(path.join(__dirname, '../html/publish.html'));
})
//API
//create
router.post("/formsubmit", async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'This field can no empty' });
        return;
    }
    // new user
    // console.log(req.body);
    const user = new userdb({   
        title: req.body.title,
        author: req.body.author,
        desc: req.body.desc,
        date:req.body.date,
        readtime:req.body.readtime
    });
    try {
        const use = await user.save();
        // res.json(user);
        res.redirect("/publish");
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/formsubmit",controller.find);

module.exports = router;  
