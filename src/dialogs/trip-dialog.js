const { PromptDialog } = require('botfuel-dialog');

class Trip extends PromptDialog {}

Trip.params = {
  namespace: 'trip',
  entities: {
    destination: {
      dim: 'city',
      priority: 10,
    },
    tripType: {
      dim: 'trip-type',
      priority: 5,
    },
    date: {
      dim: 'time',
    },
    passengerNumber: {
      dim: 'number',
    },
  },
};

module.exports = Trip;
