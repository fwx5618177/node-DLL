/**
函数名：TP_Configuration
功能：动态库初始化配置，完成门锁类型选择/发卡器连接等
@param {number} lock_type - 门锁类型(也就是使用的卡片类型): 4-RF57门锁; 5-RF50门锁
@returns {number} - 错误类型
注意：此函数为 __stdcall 调用约定，如果您的函数库采用的是 __cdecl 调用约定，需要将其修改为 __stdcall 调用约定。
*/
export const TP_Configuration = {
  "TP_Configuration": [
    "int", // return
    // parameters
    ["int"],
  ],
};

/**

函数名： TP_MakeGuestCardEx
功能：制作宾客卡
@param {string} room_no - 门锁号: 字符串, 例如 "1.2.8102"等
@param {string} checkin_time - 入住时间: 预留. 制卡时入住时间被强制为当前时间!!!
@param {string} checkout_time - 预离时间: 年月日时分秒, 字符串格式 "YYYY-MM-DD hh:mm:ss"
@param {number} iflags - 宾客卡选项, 一般置0. iflags的各种赋值解释如下:

     1: 表示允许开反锁

     8: 表示复制卡, 不顶替前卡(可以跟之前发的卡片一起用, 允许一个房间发多张卡片)

     32: 表示一次性开门, 开门后失效

     128: 表示检测卡片的入住时间(如果卡片入住时间 > 门锁当前时间, 则不能开门, 不建议用这个选项)

     上述各属性值可以相加进行组合.

     如果iflags ==0, 表示会顶替前卡,刷卡后之前的卡片失效; 不是一次性开门卡; 不检测卡片的入住时间
@param {string} card_snr - 卡号: 字符串, 至少预分配20字节
@returns {number} - 错误类型
注意：此函数为 __stdcall 调用约定，如果您的函数库采用的是 __cdecl 调用约定，需要将其修改为 __stdcall 调用约定。
Room要输入门锁号!! 其格式视门锁管理软件而定，请查看门锁管理软件的"客房设置"界面。如果门锁管理软件中没有门锁号，则请输入房号。
fun: int __stdcall TP_MakeGuestCardEx(char *card_snr, char *room_no, char *checkin_time,char *checkout_time, int iflags);
*/
export const TP_MakeGuestCardEx = {
    'TP_MakeGuestCardEx': [ 'int', [ 'string', 'string', 'string', 'string', 'int' ] ]
};

/**
 * 函数名：TP_ReadGuestCardEx
 * 功能：读宾客卡信息
 * 
 * @param {string} card_snr - 卡号: 字符串, 至少预分配20字节
 * @param {string} room_no - 房号: 字符串, 至少预分配20字节
 * @param {string} checkin_time - 入住时间: 年月日时分秒, 字符串格式 "YYYY-MM-DD hh:mm:ss", 至少预留30字节
 * @param {string} checkout_time - 预离时间: 年月日时分秒, 字符串格式 "YYYY-MM-DD hh:mm:ss", 至少预留30字节
 * @param {number} iFlags - 卡片标志字节
 * 
 * @returns {number} - 错误类型
 * 
 * 注意：此函数为 __stdcall 调用约定，如果您的函数库采用的是 __cdecl 调用约定，需要将其修改为 __stdcall 调用约定。
 * func: int __stdcall TP_ReadGuestCardEx(char *card_snr,char *room_no, char *checkin_time, char *checkout_time, int *iFlags);
 */

export const TP_ReadGuestCardEx = {
    'TP_ReadGuestCardEx': [ 'int', [ 'string', 'string', 'string', 'string', 'int *' ] ]
}

/**
 * 函数名：TP_CancelCard
 * 功能：注销卡片/卡片回收
 * 
 * @param {string} card_snr - 卡号: 字符串, 至少预分配20字节
 * 
 * @returns {number} - 错误类型
 * 
 * 注意：此函数为 __stdcall 调用约定，如果您的函数库采用的是 __cdecl 调用约定，需要将其修改为 __stdcall 调用约定。
 * func: int __stdcall TP_CancelCard(char *card_snr);
 */

export const TP_CancelCard =  {
    'TP_CancelCard': [ 'int', [ 'string' ] ]
  }

