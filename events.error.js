const events = require('events')

const emitter = new events.EventEmitter();


emitter.on('error',function(res){
    console.log(res);
});

emitter.emit('error')