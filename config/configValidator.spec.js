// Can accept only one argument
// Require the argument to be an object and throws an error if argument is not an object
// Validate configuration object against a schema and return an object with following structure:
/* {
        error: null,
        value: {
            alias: 'Module 2',
            port: 4002,
            dbName: '{ database name }',
            dbUser: '{ database user }',
            dbPassword: '{ database password }'
        },
        then: [Function: then],
        catch: [Function: catch]
    } */
// Return an error if object attributes doesn't match schema

import { expect } from 'chai';
import ConfigValidator from './configValidator';

const configValidator = new ConfigValidator();

const testConfig = {
  alias: 'Module 1',
  port: 4001,
  dbName: '{ database name }',
  dbUser: '{ database user }',
  dbPassword: '{ database password }'
};

function thenFunc() {
  return console.log('Then function');
}

function catchFunc() {
  return console.log('Catch function');
}

const returnedObject = {
  error: null,
  value: {
    alias: 'Module 1',
    port: 4001,
    dbName: '{ database name }',
    dbUser: '{ database user }',
    dbPassword: '{ database password }'
  },
  then: thenFunc(),
  catch: catchFunc()
};

console.log(configValidator.module1ConfigValidator(testConfig));

describe('ConfigValidator class methods test suite', () => {
  describe('module1ConfigValidator method tests', () => {
    context('Require the argument to be an object', () => {
      it('Should return a new object', () => {
        const result = configValidator.module1ConfigValidator(testConfig);
        expect(result).to.deep.equal(returnedObject);
      });
    });
  });
});
