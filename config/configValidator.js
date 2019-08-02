// Import Object schema description language and validator
import Joi from '@hapi/joi';

export default class ConfigValidator {
  // IMPORTANT! - Validator method naming convention is: MODULES_LIST item + ConfigValidator
  // e.g., if MODULES_LIST item in .env file is "module1" then validator method name must be "module1ConfigValidator"
  async module1ConfigValidator(config) {
    try {
      const schema = Joi.object().keys({
        alias: Joi.string(),
        port: Joi.number()
          .integer()
          .min(1)
          .max(65535)
          .required(),
        dbName: Joi.string().required(),
        dbUser: Joi.string().required(),
        dbPassword: Joi.string().required()
      });
      const result = Joi.validate(config, schema);
      return result;
    } catch (error) {
      return error;
    }
  }

  async module2ConfigValidator(config) {
    try {
      const schema = Joi.object().keys({
        alias: Joi.string(),
        port: Joi.number()
          .integer()
          .min(1)
          .max(65535)
          .required(),
        dbName: Joi.string().required(),
        dbUser: Joi.string().required(),
        dbPassword: Joi.string().required()
      });
      const result = Joi.validate(config, schema);
      return result;
    } catch (error) {
      return error;
    }
  }
}
