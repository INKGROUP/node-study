const fs = require('fs');

fs.readFile('package.json','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }    
})