const http = require("http");
http.createServer(function(req, res){
    res.writeHead(200, {"content-Type": "text/html"});

    res.write("<h1> Welcome to Node js </h1>");
    res.write("<p> The p tag is added </p");
    res.end();

}).listen(1111, function(){console.log("Server is live on : http://localhost:1111")});


//http://localhost:1111
