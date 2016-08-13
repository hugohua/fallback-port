
'use strict';

import shelljs from 'shelljs';

let win = {
    pid : port =>{
        let result = shelljs.exec(`netstat -anop tcp | findstr ":${port}" |  findstr "LISTENING"`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[5] : null
    }
};

export default win;
