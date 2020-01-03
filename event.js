const modules = require('modules.js');

const EventEmitter = require('events');

class House extends EventEmitter {
    constructor(){
        super();
        this.info = ''
        setInterval( () =>{
            this.emit('newPrice',{price:Math.round(Math.random()*100)});
            console.log('this is a newPrice');
        }, 3000 );
    }
}


let bjhouse = new House();
bjhouse.info = 'this is the newest price of beijing'
bjhouse.on('newPrice', function(e){
    console.log(`bjhouse:${e.price}`);    
    console.log(this.info);
})