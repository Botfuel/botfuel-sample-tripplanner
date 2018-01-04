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
    ages: {
      dim: 'number',
      isFulfilled: (ages = [], { dialogEntities = {} } = {}) => (
          dialogEntities.passengerNumber &&
          ages.length >= dialogEntities.passengerNumber.values[0].value
        ),
      reducer: (oldAges, newAge) => [...(oldAges || []), newAge],
    },
  },
};

module.exports = Trip;
