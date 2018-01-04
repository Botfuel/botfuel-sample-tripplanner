const { PromptView, BotTextMessage } = require('botfuel-dialog');

const makeInfo = (entities) => {
  const destination = entities.destination && entities.destination.values[0].value;
  const date = entities.date && new Date(entities.date.values[0].milliseconds);
  const passengerNumber = entities.passengerNumber && entities.passengerNumber.values[0].value;
  const ages = entities.ages && entities.ages.map(age => age.values[0].value);

  return `
    Here is a summary of the information you gave me:
    ${destination ? `Destination: ${destination}` : ''}
    ${date ? `Date: ${date}` : ''}
    ${passengerNumber ? `Number of passengers: ${passengerNumber}` : ''}
    ${ages ? `Ages of passengers: ${ages}` : ''}
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
    case 'ages':
      return 'Can you give me the ages of the remaining passengers?';
    default:
      return null;
  }
};

class TripView extends PromptView {
  renderEntities(matchedEntities, missingEntities) {
    const messages = [];

    // Print info of obtained information
    if (Object.keys(matchedEntities).filter(key => matchedEntities[key]).length !== 0) {
      messages.push(new BotTextMessage(makeInfo(matchedEntities)));
    }

    // Ask for any missing information
    if (Object.keys(missingEntities).length !== 0) {
      messages.push(new BotTextMessage(askInfo(Object.keys(missingEntities)[0])));
    }

    if (!Object.keys(missingEntities).length) {
      messages.push(new BotTextMessage('Ok, I have all I need to book your trip.'));
    }

    return messages;
  }
}

module.exports = TripView;
