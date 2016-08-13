
'use strict';

import shelljs from 'shelljs';

let unix = {

    pid : port =>{
        let result = shelljs.exec(`lsof -i tcp:${port}`,{silent:true}).stdout;
        return result ? result.split(/\s+/)[10] : null;
    }
};

export default unix;