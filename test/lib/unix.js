
'use strict';

let unix = require('../../lib/unix');
let server = require('./../helpers/server');

describe('# test unix file', () => {

    before( () => {
        this.busyPort = 12345;
        this.freePort = 22332;

        server.listen(this.busyPort);

    } );


    after( () => {
        server.close();
    } );

    it('#pid(port) return number', () => {

        let pid = unix.pid(this.busyPort);
        let pidNumber = parseInt(pid,10);
        expect(pid).to.be.a('string');
        expect(pidNumber).to.be.a('number');
    });

    it('#pid(port) return null', () => {
        let pid = unix.pid(this.freePort);
        expect(pid).to.be.null;
    });

    it('#kill(port)', () => {
        unix.kill(this.freePort);
        let pid = unix.pid(this.freePort);
        expect(pid).to.be.null;
    });

});