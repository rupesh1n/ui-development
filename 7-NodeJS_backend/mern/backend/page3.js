const http = require("http");
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/json'});

    let itemlist = [
        {pname:"Apple", cost:300, photo:"1.jpg"},
        {pname:"Mango", cost:500, photo:"2.jpg"},
        {pname:"Banana", cost:200, photo:"3.jpg"},
        {pname:"Orange", cost:100, photo:"4.jpg"},
        {pname:"Grapes", cost:900, photo:"5.jpg"}
    ]
    let jsondata = JSON.stringify(itemlist); // array to json

    res.write(jsondata);
    
    res.end();
}).listen(1111, function(){
    console.log("Server is live on : http://localhost:1111")
});


//http://localhost:1111
