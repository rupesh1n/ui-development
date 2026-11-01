const express = require("express");  // calling express framework
const app = express();          // creating object of express
const cors = require("cors");  // calling cors origin library to allow data communication between 2 server
app.use(cors());             // creating object of cors library
app.use(express.json());   // injecting the json to handel json data communication

// http://localhost:1111
app.get("/", (req, res)=>{
    res.send("<h1> Welocome to Node Api </h1>"); 
    res.end();
})

// http://localhost:1111/booklist
app.get("/booklist", (req, res)=>{
    let booklist = ['html', 'css', 'node.js', 'php', 'java', 'mysql', 'angular'];
    res.send(booklist);
    res.end();
})

// http://localhost:1111/itemlist
app.get("/itemlist", (req, res)=>{
    let itemlist = [
        {pname:"Apple", cost:300, photo:"1.jpg"},
        {pname:"Mango", cost:500, photo:"2.jpg"},
        {pname:"Banana", cost:200, photo:"3.jpg"},
        {pname:"Orange", cost:100, photo:"4.jpg"},
        {pname:"Grapes", cost:900, photo:"5.jpg"}
    ];
    res.send(itemlist);
    res.end();
})

app.listen(1111, function(){
    console.log("Server is live on http://localhost:1111");
})