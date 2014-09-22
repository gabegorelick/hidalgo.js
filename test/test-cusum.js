'use strict';

var chai = require('chai');
var expect = chai.expect;

var testStat = require('hidalgo-cusum-test-stat');
var pValue = require('hidalgo-cusum-pvalue');

describe('cusum', function () {
  describe('test-stat', function () {
    it('should export a function', function () {
      // make sure the npm package is OK
      expect(testStat).to.be.a('function');
    });
  });

  describe('p-value', function () {
    it('should export a function', function () {
      // make sure the npm package is OK
      expect(pValue).to.be.a('function');
    });
  });
});
