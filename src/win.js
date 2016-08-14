
'use strict';

import shelljs from 'shelljs';
var spawn = require('child_process').spawn;

let win = {
    pid : port =>{
        let result = shelljs.exec(`netstat -anop tcp | findstr ":${port}" |  findstr "LISTENING"`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[5] : null
    },

    kill : port =>{
        let pid = win.pid(port);
        pid && spawn("taskkill", ["/pid", pid, '/f', '/t']);
    }
};

export default win;
