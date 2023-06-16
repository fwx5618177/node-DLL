const { TP_Configuration, TP_MakeGuestCardEx, TP_ReadGuestCardEx, TP_CancelCard } = require('./dll.conf.js')

export const LIB_NAME = "../dll/mylib.dll"

export const lib_func = {
    TP_Configuration,
    TP_MakeGuestCardEx,
    TP_ReadGuestCardEx,
    TP_CancelCard
}

module.exports = {
    LIB_NAME,
    lib_func
}