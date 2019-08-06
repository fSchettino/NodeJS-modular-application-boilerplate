// Import Object schema description language and validator
import Joi from '@hapi/joi';

class ConfigValidator {
  // Singleton pattern
  constructor() {
    if (!ConfigValidator.instance) {
      ConfigValidator.instance = this;
    }
    return ConfigValidator.instance;
  }

  // IMPORTANT! - Validator method naming convention is: MODULES_LIST item + ConfigValidator
  // e.g., if MODULES_LIST item in .env file is "module1" then validator method name must be "module1ConfigValidator"
  module1ConfigValidator(config) {
    try {
      const schema = Joi.object({
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
      const result = schema.validate(config);
      return result;
    } catch (error) {
      return error;
    }
  }

  module2ConfigValidator(config) {
    try {
      const schema = Joi.object({
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
      const result = schema.validate(config);
      return result;
    } catch (error) {
      return error;
    }
  }
}

const configValidator = new ConfigValidator();
Object.freeze(configValidator);

export default configValidator;
