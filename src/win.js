
'use strict';

import shelljs from 'shelljs';
import treeKill from 'tree-kill';

let win = {
    pid : port =>{
        let result = shelljs.exec(`netstat -anop tcp | findstr ":${port}" |  findstr "LISTENING"`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[5] : null
    },

    kill : port =>{
        let pid = win.pid(port);
        treeKill(pid);
    }
};

export default win;
