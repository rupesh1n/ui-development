const express = require("express"); // calling express framework
const app = express();             // creating object of express
const cors = require("cors");     // calling cors origin library to allow data communication between 2 server
app.use(cors());                 // creating object of cors library
app.use(express.json());        // injecting the json to handle json data communication

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mern22");
const db = mongoose.connection;

db.on("error", (error)=>console.log("Error in DB Connection"));
db.on("open", ()=>console.log("DataBase is Connected..."));


const userapi = require("./userapi");
app.use("/user", userapi);  
/*
    http://localhost:1111/user 
    get, post, put, patch, delete
*/

const adminapi = require("./adminapi");
app.use("/myadmin", adminapi);  
/*
    http://localhost:1111/myadmin
    get, post, put, patch, delete
*/

app.listen(1111, function(){
    console.log("server is live on - http://localhost:1111");
});

