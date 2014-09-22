'use strict';

var chai = require('chai');
var expect = chai.expect;

var filterBaselineZeros = require('../remove-missing-data');

describe('filterBaselineZeros', function () {
  it('should work for the simple case', function () {
    expect(filterBaselineZeros([1, 1, 0, 0, 0, 1, 1, 1], {minConsecutiveZeros: 3, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 1, 1, 1]);
  });

  it('should use default parameters', function () {
    expect(filterBaselineZeros([1, 1, 0, 0, 0, 1, 1, 1])).to.deep.equal([1, 1, 1, 1, 1]);
  });

  it('should not remove sequence of 0s < minNumZeros', function () {
    expect(filterBaselineZeros([1, 1, 0, 0, 1, 1, 1], {minConsecutiveZeros: 3, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 0, 0, 1, 1, 1]);
  });

  it('should not remove sequence of 0s > thresholdProbabilty', function () {
    expect(filterBaselineZeros([1, 0, 0, 0, 1], {minConsecutiveZeros: 3, thresholdProbability: 0.1}))
      .to.deep.equal([1, 0, 0, 0, 1]);
  });

  it('should remove leading 0s', function () {
    expect(filterBaselineZeros([0, 1, 1, 1], {minConsecutiveZeros: 1, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 1]);
  });

  it('should not remove leading 0s < minNumZeros', function () {
    expect(filterBaselineZeros([0, 1, 1, 1], {minConsecutiveZeros: 2, thresholdProbability: 0.9}))
      .to.deep.equal([0, 1, 1, 1]);
  });

  it('should remove trailing 0s', function () {
    expect(filterBaselineZeros([1, 1, 1, 0], {minConsecutiveZeros: 1, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 1]);
  });

  it('should not remove trailing 0s < minNumZeros', function () {
    expect(filterBaselineZeros([1, 1, 1, 0], {minConsecutiveZeros: 2, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 1, 0]);
  });

  it('should remove multiple sequences of 0s', function () {
    expect(filterBaselineZeros([0, 1, 1, 1, 1, 1, 1, 0], {minConsecutiveZeros: 1, thresholdProbability: 0.9}))
      .to.deep.equal([1, 1, 1, 1, 1, 1]);
  });

  it('should return [] if input is all 0s', function () {
    expect(filterBaselineZeros([0, 0], {minConsecutiveZeros: 1, thresholdProbability: 0.9})).to.deep.equal([]);
  });
});
