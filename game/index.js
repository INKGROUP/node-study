const querystring = require('querystring');
const http = require('http');
const url = require('url');
const fs = require('fs');

const game = require('../lib/game-http')

http.createServer(function (request, response) {
    const parseUrl = url.parse(request.url);

    if (parseUrl.pathname == '/game') {
        const query = querystring.parse(parseUrl.query);

        const playerAction = query.action;

        const gameResult = game(playerAction);

        response.writeHead(200);
        if (gameResult == 0) {
            response.end('tie')
        } else if (gameResult == 1) {
            response.end('you win')
        } else {
            response.end('you fail')
        }

    }

    if (request.url == '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(response)
    }

}).listen(3000)