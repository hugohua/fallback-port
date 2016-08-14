
'use strict';

import shelljs from 'shelljs';

let unix = {
    pid : port =>{
        let result = shelljs.exec(`lsof -i tcp:${port}`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[10] : null;
    },

    kill : port =>{
        let pid = unix.pid(port);
        pid && shelljs.exec(`kill -9 ${pid}`,{silent:true});
    }
};

export default unix;