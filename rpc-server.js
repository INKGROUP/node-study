const net = require('net')

const server = net.createServer( (socket) => {
    socket.on('data', function(buffer){        
        const lessonid = buffer.readInt32BE();
        console.log(`lessonid: ${lessonid}`);
        setTimeout(()=>{
            socket.write(
                Buffer.from(data[lessonid])
            )
        },50)
    })
})

server.listen(4000)

const data = {
    1001: "01 | speaking",
    1002: "02 | small talking",
    1003: "03 | travalling",
    1004: "04 | promotion",
    1005: "05 | family",
    1006: "06 | friend",
    1007: "07 | relationship",
    1008: "08 | meeting",
    1009: "09 | compensation",
    1010: "10 | career path"
}