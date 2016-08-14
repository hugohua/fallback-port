
'use strict';

let Fallback = require('../../lib/index');
let server = require('./../helpers/server');

describe('# test unix file', () => {

    before( () => {
        this.busyPort = 12346;
        this.freePort = 22332;
        this.bfb = new Fallback(this.busyPort);
        this.ffb = new Fallback(this.freePort);
        server.listen(this.busyPort);
    } );


    after( () => {
        server.close();
    } );

    it('#getPid() return number', () => {
        let pid = this.bfb.getPid();
        let pidNumber = parseInt(pid,10);
        expect(pid).to.be.a('string');
        expect(pidNumber).to.be.a('number');
    });

    it('#getPid() return null', () => {
        let pid = this.ffb.getPid();
        expect(pid).to.be.null;
    });

    it('#getPort() return number', () => {
        let port = this.bfb.getPort();
        expect(port).to.be.a('number');
        expect(port).not.equal(this.busyPort)
    });

    it('#getPort() return number', () => {
        let port = this.ffb.getPort();
        expect(port).to.be.a('number');
        expect(port).equal(this.freePort)
    });

    it('#kill()', () => {
        this.ffb.kill();
        let pid = this.ffb.getPid();
        expect(pid).to.be.null;
    });

});