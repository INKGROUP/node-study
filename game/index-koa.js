const Koa = require('koa');
const mount = require('koa-mount');
const game = require('../lib/game-http');
const fs = require('fs');

const app = new Koa();
const gameKoa = new Koa();

app.use(
    mount('/favicon.ico', function(ctx){
        ctx.status = 200;
    })
)

app.use(
    mount('/game',
        gameKoa
    )
)

gameKoa.use(
    async function(ctx){
        const query = ctx.query;
        const playerAction = query.action;
        const gameResult = game(playerAction);

        await new Promise((resolve)=>{
            setTimeout(()=>{
                ctx.status = 200;
                if (gameResult == 0) {
                    ctx.body('tie')
                } else if (gameResult == 1) {
                    ctx.body('you win')
                } else {
                    ctx.body('you fail')
                }
            },500)
        })        
    }
)

app.use(
    mount('/', function(ctx){
        ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
    })
)


app.listen(3000, ()=>{
    console.log('app started at port 3000...');
});