const game = require('./lib/game.js')
// const argv = process.argv;
//var playerAction = argv[argv.length - 1];
// if( argv.length < 3){
//     console.log('你还没有出昵！');
//     return false
// }

let count = 0;

process.stdin.on('data', e => {
    console.log(`e:${e}`)
    const playerAction = e.toString().trim();

    const result = game(playerAction);

    if( result == -1 ){
        count++
    }

    if( count === 3 ){
        console.log('You are great, I quit!!!!')
        process.exit();
    }
})




