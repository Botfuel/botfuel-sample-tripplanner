const { WsExtractor } = require('botfuel-dialog');

class TimeExtractor extends WsExtractor {}

TimeExtractor.params = {
  dimensions: ['time'],
};

module.exports = TimeExtractor;
