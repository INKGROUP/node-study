const http = require('http')
const fs = require('fs')

// http.createServer(function(req, res){
//     req.on('data',function(chunk){
//         console.log(chunk)
//     })

//     req.on('end',function(){
//         console.log('end')
//     })

//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.write('<h1>Node.js</h1>')
//     res.end('<h1>12312312313212</h1>')
// }).listen(3000);

http.createServer( function(req, res){
    if(req.url == '/ytf'){
        res.writeHead(200);
        res.write('hello')
        res.end();
        return;
    }

    res.writeHead(200)
    fs.createReadStream(__dirname + '/package.json')
        .pipe(res);
}).listen(3100)