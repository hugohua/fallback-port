
'use strict';

import shelljs from 'shelljs';
import treeKill from 'tree-kill';

let unix = {

    pid : port =>{
        let result = shelljs.exec(`lsof -i tcp:${port}`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[10] : null;
    },

    kill : port =>{
        let pid = unix.pid(port);
        treeKill(pid);
    }
};

export default unix;