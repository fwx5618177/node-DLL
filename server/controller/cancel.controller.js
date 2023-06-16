const ref = require("ref");
const { TP_CancelCard } = require("../../core/load");

class CancelController {
  constructor() {}

  async handler(_req, res) {
    try {
      const card_snr = _req.body.card_snr || ref.allocCString("", 20);
      const result = await TP_CancelCard(card_snr);
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

module.exports = CancelController
