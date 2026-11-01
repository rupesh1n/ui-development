const express = require("express");
const router = express.Router();
module.exports = router;

const Myadmin = require("./adminschema");


router.post("/login", async (req, res) => {
    let input = {"email": req.body.email,"password": req.body.password};
    let info = await Myadmin.findOne(input);
    
    if(info===null){
        res.status(200).json({"message":"Login fail..."});
    }else{
        let key = Math.random().toString(36).slice(2);
        info.token = key;
        await info.save();
        res.status(200).json({"fullname":info.fullname, "token":key, "message":"Login Success..."});
    }
    
});



router.post("/logout", async (req, res) => {
    let info = await Myadmin.findOne({"token":req.headers.authorization});
    if(info != null){
        info.token = "";
        await info.save();
        res.status(200).json({"message":"You are Logout Successfully..."});
    } else {
        res.status(200).json({"message":"Authorization Problem. Try Again"});
    }
    res.status(200).json(info);
});

