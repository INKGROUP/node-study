const net = require('net')

const socket = new net.Socket({});

socket.connect({
    host: '127.0.0.1',
    port: 4000
});



const lessonids = [
    "1001",
    "1002",
    "1003",
    "1004",
    "1005",
    "1006",
    "1007",
    "1008",
    "1009",
    "1010"
]

let buffer  = Buffer.alloc(4);
let index = Math.floor(Math.random()*lessonids.length);
buffer.writeInt32BE(
    lessonids[index]
)
socket.write(buffer)

socket.on('data', (buffer)=>{
    console.log(lessonids[index], buffer.toString())
    //以下代码，让客户端不断的向服务器发送消息
    buffer  = Buffer.alloc(4);
    index = Math.floor(Math.random()*lessonids.length);
    buffer.writeInt32BE(
        lessonids[index]
    )
    socket.write(buffer)

})

