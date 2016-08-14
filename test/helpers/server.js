'use strict'

var http = require('http');

this.server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!\n');
});

exports.listen = function () {
    this.server.listen.apply(this.server, arguments);
};

exports.close = function (callback) {
    this.server.close(callback);
};
//
//if(process.argv.length > 2){
//    if(process.argv[3] === 'close'){
//        this.server.close()
//    }else {
//        this.server.listen(process.argv[3]);
//    }
//}



