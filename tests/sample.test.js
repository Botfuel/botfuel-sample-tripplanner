const {
  Bot, BotTextMessage, UserTextMessage,
} = require('botfuel-dialog');
const config = require('../test-config');

describe('Test bot answers', () => {
  test('Complete interaction', async () => {
    const bot = new Bot(config);
    const { userId } = bot.adapter;
    await bot.play([
      new UserTextMessage('I want to travel to Paris.'),
      new UserTextMessage('round trip please'),
      new UserTextMessage('2018 april 21th'),
      new UserTextMessage('we are 3'),
    ]);
    expect(bot.adapter.log).toEqual([
      new UserTextMessage('I want to travel to Paris.'),
      new BotTextMessage(`
    Here is a summary of the information you gave me:
    <ul>
    <li>Destination: Paris</li>
    
    
    
    </ul>
  `),
      new BotTextMessage('Do you want a round-trip or a one-way ticket?'),
      new UserTextMessage('round trip please'),
      new BotTextMessage(`
    Here is a summary of the information you gave me:
    <ul>
    <li>Destination: Paris</li>
    <li>Trip type: round-trip</li>
    
    
    </ul>
  `),
      new BotTextMessage('When would you like to leave?'),
      new UserTextMessage('2018 april 21th'),
      new BotTextMessage(`
    Here is a summary of the information you gave me:
    <ul>
    <li>Destination: Paris</li>
    <li>Trip type: round-trip</li>
    <li>Date: Sat Apr 21 2018 02:00:00 GMT+0200 (CEST)</li>
    
    </ul>
  `),
      new BotTextMessage('How many are coming?'),
      new UserTextMessage('we are 3'),
      new BotTextMessage(`
    Here is a summary of the information you gave me:
    <ul>
    <li>Destination: Paris</li>
    <li>Trip type: round-trip</li>
    <li>Date: Sat Apr 21 2018 02:00:00 GMT+0200 (CEST)</li>
    <li>Number of passengers: 3</li>
    </ul>
  `),
      new BotTextMessage('Ok, I have all I need to book your trip.'),
    ].map(o => o.toJson(userId)));
  }, 30000); // 30s timout
});
