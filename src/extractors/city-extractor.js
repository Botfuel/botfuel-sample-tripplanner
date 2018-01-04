const { WsExtractor } = require('botfuel-dialog');

class CityExtractor extends WsExtractor {}

CityExtractor.params = {
  dimensions: ['city'],
};

module.exports = CityExtractor;
