const { CorpusExtractor, FileCorpus } = require('botfuel-dialog');

class TripTypeExtractor extends CorpusExtractor {
  constructor() {
    super({
      dimension: 'trip-type',
      corpus: new FileCorpus(`${__dirname}/../corpora/trip-type.txt`),
      options: {},
    });
  }
}

module.exports = TripTypeExtractor;
