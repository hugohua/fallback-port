'use strict';

import shelljs from 'shelljs';
import os from 'os';
import win from './win';
import unix from './unix';

let platform = os.type().match(/^Win/) ? 'win' : 'unix';

console.log(platform,'==');


export default class FallbackPort {
    constructor(port) {
        this.port = port;
    }

    /**
     * get pid from port
     * @returns pid or null
     */
    getPid() {
        return platform === 'win' ? win.pid(this.port) : unix.pid(this.port)
    }

    /**
     * return an available port
     * @returns {*}
     */
    getPort (){
        return this.getPid() ? (this.port + Math.floor(Math.random() * 1000)) : this.port
    }

    /**
     * kill background process
     * @returns {*}
     */
    kill () {
        return platform === 'win' ? win.kill(this.port) : unix.kill(this.port)
    }

}