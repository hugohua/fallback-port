
'use strict';

import shelljs from 'shelljs';

let win = {
    pid : port =>{
        let result = shelljs.exec(`netstat -anop tcp | find /i ":${port}" |  find "LISTENING"`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[5] : null
    },

    kill : port =>{
        let pid = unix.pid(port);
        return shelljs.exec(`taskkill /F /pid ${port}`,{silent:true}).stdout;
    }
};

export default win;
