'use strict';

module.exports = {
  cusum: {
    testStat: require('hidalgo-cusum-test-stat'),
    pValue: require('hidalgo-cusum-pvalue')
  },

  removeMissingData: require('./remove-missing-data')

  // TODO more algos
};
