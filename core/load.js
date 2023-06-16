const { lib_func, LIB_NAME } = require('../conf/conf.js')

const ffi = require('ffi');
const ref = require('ref');
const {
    TP_Configuration,
    TP_MakeGuestCardEx,
    TP_ReadGuestCardEx,
    TP_CancelCard
} = ffi.Library(LIB_NAME, lib_func);


module.exports = {
    TP_Configuration,
    TP_MakeGuestCardEx,
    TP_ReadGuestCardEx,
    TP_CancelCard
}