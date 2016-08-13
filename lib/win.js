
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var win = {
    pid: function pid(port) {
        var result = _shelljs2.default.exec('netstat -anop tcp | find /i ":' + port + '" |  find "LISTENING"', { silent: true }).stdout;
        return result ? result.split(/\s+/)[5] : null;
    },

    kill: function kill(port) {
        var pid = win.pid(port);
        return _shelljs2.default.exec('taskkill /F /pid ' + port, { silent: true }).stdout;
    }
};

exports.default = win;
module.exports = exports['default'];