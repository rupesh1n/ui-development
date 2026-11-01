const express = require("express");
const router = express.Router();
module.exports = router;

const user = require("./userschema");
const Admin  = require("./adminschema");

const userCheck = async(token) =>{
    let info = await Admin.findOne({"token":token});
    return info != null;
}

router.get("/", async(req, res)=>{

    if(userCheck(req.headers.authorization))
        {
        let alluser = await user.find();
        alluser.reverse();
        res.status(200).json(alluser);
    }else{
        res.status(200).json([]);
    }
});

router.post("/", async(req, res)=>{
    if(userCheck(req.headers.authorization)){
    let newuser = user({
        "fname":req.body.name,
        "email":req.body.email,
        "address":req.body.address,
        "mobile":req.body.mobile
    });
    let userinfo = await newuser.save();
    res.status(200).json({"message":"User Added Successfully..."+ req.headers.authorization});
    }else{
        res.status(200).json([]);
    }
});


router.put("/", async(req, res)=>{
    let myuser = await user.findById(req.body.id);

    myuser.fname = req.body.name;
    myuser.email = req.body.email;
    myuser.address = req.body.address;
    myuser.mobile = req.body.mobile;
   
    await myuser.save(); // update 
    res.status(200).json({"message":"Record Updated Successfully..."});
});


// http://localhost:1111/user/656565656
router.get("/:id", async(req, res)=>{
    
    
        let userid = req.params.id;
        if(userid.length == 24){
            let userinfo = await user.findById(userid);
            if(userinfo == null){
                res.status(200).json({"message":"No Matching Record..."});
            }else{
                res.status(200).json(userinfo);
            }
        }else{
            res.status(200).json({"message":"Invalid Request"});
        }
    
});


// http://localhost:1111/user/656565656
router.delete("/:id", async(req, res)=>{
    if(userCheck(req.headers.authorization)){
    let userid = req.params.id;
    if(userid.length == 24){
        let userinfo = await user.findById(userid);

        if(userinfo == null){
            res.status(200).json({"message":"No Matching Record to Delete..."});
        }else{
            await userinfo.deleteOne();
            res.status(200).json({"message":"Record Deleted Successfully..."});
        }
        }else{
            res.status(200).json({"message":"Invalid Request"});
        }
    }else{
        res.status(200).json({"message":"Authorization Fail"});
    }
});
