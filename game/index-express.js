const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');
const game = require('../lib/game-http')
const express = require('express');

const app = express();
app.get('/favicon.ico', function(req,res){
    res.writeHead(200)
    res.end();
    return;
})

app.get('/game', function(req,res){
    const parseUrl = url.parse(req.url);
    const query = querystring.parse(parseUrl.query);

    const playerAction = query.action;

    const gameResult = game(playerAction);

    res.writeHead(200);
    if (gameResult == 0) {
        res.end('tie')
    } else if (gameResult == 1) {
        res.end('you win')
    } else {
        res.end('you fail')
    }
})

app.get('/', function(req, res){
    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html').pipe(res)
})

app.listen(9527)
