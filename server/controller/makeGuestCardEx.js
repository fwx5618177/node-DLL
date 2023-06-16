const ref = require("ref");
const { TP_MakeGuestCardEx } = require("../../core/load.js");

class MakeGuestCardEx {
  constructor() {}
  async handle(req, res) {
    try {
      const card_snr = req.body.card_snr || ref.allocCString("", 20);
      const { room_no, checkin_time, checkout_time, iflags } = req.body;
      const result = await TP_MakeGuestCardEx(
        card_snr,
        room_no,
        checkin_time,
        checkout_time,
        iflags
      );
      const card_snr_str = ref.readCString(card_snr);

      return res.status(201).send({
        data: {
          result,
          card_snr_str,
        },
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default MakeGuestCardEx;
