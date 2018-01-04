const { WsExtractor } = require('botfuel-dialog');

class NumberExtractor extends WsExtractor {}

NumberExtractor.params = {
  dimensions: ['number'],
};

module.exports = NumberExtractor;
