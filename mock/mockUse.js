const ffi = require('ffi');
const ref = require('ref');

const MOCK_TP_MakeGuestCardEx = {
    card_snr: ref.allocCString(''), // 至少预分配20字节的字符串空间
    room_no: '1.2.8102',
    checkin_time: '',
    checkout_time: '2008-06-07 12:00:00',
    iflags: 8,
}

// const result = TP_MakeGuestCardEx(card_snr, room_no, checkin_time, checkout_time, iflags)
// const card_snr_str = ref.readCString(card_snr)

const MOCK_TP_ReadGuestCardEx = {
    card_snr: ref.allocCString(''), // 至少预分配20字节的字符串空间
    room_no: ref.allocCString('', 20),
    checkin_time: ref.allocCString('', 30),
    checkout_time: ref.allocCString('', 30),
    iflags: ref.alloc('int'),
}

// const result = TP_ReadGuestCardEx(card_snr, room_no, checkin_time, checkout_time, iflags)
// const card_snr_str = ref.readCString(card_snr)
// const room_no_str = ref.readCString(room_no)
// const checkin_time_str = ref.readCString(checkin_time)
// const checkout_time_str = ref.readCString(checkout_time)


const MOCK_TP_CancelCard = {
    card_snr: ref.allocCString('', 20), // 至少预分配20字节的字符串空间
}

// const result = TP_CancelCard(card_snr)
// const card_snr_str = ref.readCString(card_snr)