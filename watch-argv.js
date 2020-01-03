'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if( !filename ) {
    throw Error('A file to watch much be specified!');
}

//fs.watch(filename, () => console.log(`File ${filename} changed！`));

fs.watch(filename, () => {
    const ls = spawn('ls',['-l','-h',filename]);
    ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes...`);