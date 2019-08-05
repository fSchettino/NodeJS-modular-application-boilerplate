import { expect } from 'chai';
import ConfigValidator from './configValidator';

const configValidator = new ConfigValidator();

const validConfig = {
  alias: 'Module 1',
  port: 4001,
  dbName: '{ database name }',
  dbUser: '{ database user }',
  dbPassword: '{ database password }'
};

const invalidConfig = {
  alias: 1,
  port: 70000,
  dbName: null,
  dbUser: null,
  dbPassword: null
};

describe('ConfigValidator class methods test suite', () => {
  describe('module1ConfigValidator method tests', () => {
    it('Should return result.error === null if schema is valid', () => {
      const result = configValidator.module1ConfigValidator(validConfig);
      expect(result.error).to.eql(null);
    });

    it('Should return an error if schema is invalid', () => {
      const result = configValidator.module1ConfigValidator(invalidConfig);
      expect(result.error.name).to.eql('ValidationError');
    });
  });

  describe('module2ConfigValidator method tests', () => {
    it('Should return result.error === null if schema is valid', () => {
      const result = configValidator.module2ConfigValidator(validConfig);
      expect(result.error).to.eql(null);
    });

    it('Should return an error if schema is invalid', () => {
      const result = configValidator.module2ConfigValidator(invalidConfig);
      expect(result.error.name).to.eql('ValidationError');
    });
  });
});
