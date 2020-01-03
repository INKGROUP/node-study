const util = require('util')

function Person(){
    this.name = 'boy';

    this.toString = function(){
        return this.name;
    }
}

const obj = new Person();

console.log(util.inspect( obj,true ))
