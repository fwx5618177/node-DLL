class ConfigurationController {
  constructor(makeConfigurationUseCase) {
    this.makeConfigurationUseCase = makeConfigurationUseCase;
  }

  async handle(_req, res) {
    try {
      const configuration = await this.makeConfigurationUseCase.execute(httpRequest.body);

      return res.status(201).send({
        data: {
            result,
            card_snr_str
        }
    });
    } catch (error) {
        res.status(500).json(error);
    }
  }
}

export default ConfigurationController;