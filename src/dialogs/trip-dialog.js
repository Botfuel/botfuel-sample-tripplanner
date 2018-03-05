const { PromptDialog } = require('botfuel-dialog');

class Trip extends PromptDialog {}

Trip.params = {
  namespace: 'trip',
  entities: {
    destination: {
      dim: 'city',
    },
    date: {
      dim: 'time',
    },
    passengerNumber: {
      dim: 'number',
    },
    tripType: {
      dim: 'trip-type',
      priority: 10,
    },
  },
};

module.exports = Trip;
