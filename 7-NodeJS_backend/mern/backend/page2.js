const http = require("http");
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/json'});

    let booklist = ['html', 'css', 'node.js', 'php', 'java', 'mysql', 'angular']
    let jsondata = JSON.stringify(booklist);

    res.write(jsondata);

    res.end();
}).listen(2222, function(){console.log("Server is live on : http://localhost:2222")});


//http://localhost:2222
