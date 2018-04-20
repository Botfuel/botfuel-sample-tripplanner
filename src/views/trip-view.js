const { PromptView, BotTextMessage } = require('botfuel-dialog');

const makeInfo = (entities) => {
  const destination = entities.destination && entities.destination.values[0].value;
  const date = entities.date && new Date(entities.date.values[0].milliseconds);
  const passengerNumber = entities.passengerNumber && entities.passengerNumber.values[0].value;
  const tripType = entities.tripType && entities.tripType.values[0].value;

  return `
    Here is a summary of the information you gave me:
    <ul>
    ${destination ? `<li>Destination: ${destination}</li>` : ''}
    ${tripType ? `<li>Trip type: ${tripType}</li>` : ''}
    ${date ? `<li>Date: ${date}</li>` : ''}
    ${passengerNumber ? `<li>Number of passengers: ${passengerNumber}</li>` : ''}
    </ul>
  `;
};

const askInfo = (entityName) => {
  switch (entityName) {
    case 'destination':
      return 'Which city would you like to travel to?';
    case 'date':
      return 'When would you like to leave?';
    case 'passengerNumber':
      return 'How many are coming?';
    case 'tripType':
      return 'Do you want a round-trip or a one-way ticket?';
    default:
      return '';
  }
};

class TripView extends PromptView {
  render(userMessage, { matchedEntities, missingEntities }) {
    const messages = [];

    // Print info of obtained information
    if (Object.keys(matchedEntities).filter(key => matchedEntities[key]).length !== 0) {
      messages.push(new BotTextMessage(makeInfo(matchedEntities)));
    }

    // Ask for any missing information
    if (missingEntities.size !== 0) {
      messages.push(new BotTextMessage(askInfo(missingEntities.keys().next().value)));
    }

    if (missingEntities.size === 0) {
      messages.push(new BotTextMessage('Ok, I have all I need to book your trip.'));
    }

    return messages;
  }
}

module.exports = TripView;
