const { View, BotTextMessage } = require('botfuel-dialog');

const random = max => Math.floor(Math.random() * Math.floor(max));

const responses = [
  [
    new BotTextMessage('Hello!'),
    new BotTextMessage('What can I do for you ?'),
  ],
  [
    new BotTextMessage('Hello!'),
    new BotTextMessage('How can I help you ?'),
  ],
];

class GreetingsView extends View {
  render() {
    const randomIndex = random(responses.length);
    return responses[randomIndex];
  }
}


module.exports = GreetingsView;
