import { assert, expect } from 'chai';
import { matchString } from './demo';

require('chai').should();

describe('Testing assert function: ', () => {
  describe('Check matchString Function', () => {
    it('Check the returned result using : assert.equal(result, string): ', () => {
      const result = matchString('Hello', 'Hello');
      assert.equal(result, 'Match!');
    });
  });
});

describe('Testing should function: ', () => {
  describe('Check matchString Function', () => {
    it('Check the returned result using : result.should.be.equal(string): ', () => {
      const result = matchString('Hello', 'Bye');
      result.should.be.equal('No match!');
    });
  });
});

describe('Testing expect function: ', () => {
  describe('Check matchString Function', () => {
    it('Check the returned result using : expect(result).to.equal(string): ', () => {
      const result = matchString('Hello', 'Hello');
      expect(result).to.equal('Match!');
    });
  });
});
