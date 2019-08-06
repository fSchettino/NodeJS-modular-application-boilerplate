import { expect } from 'chai';
import configValidator from './configValidator';

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
  describe('constructor test', () => {
    it('Should return an istance if no instance has been created', () => {
      const result = configValidator.constructor();
      expect(result).to.eql(configValidator);
    });
  });

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
