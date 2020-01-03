const glob = require('glob');

var result = null;
// glob(__dirname + '/*', function (err, res){
//     result = res;   
//     console.log(result) 
// })


result = glob.sync(__dirname + '/**/*')
console.log( result )
