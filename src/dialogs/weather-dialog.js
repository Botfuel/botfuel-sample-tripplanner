const request = require('request-promise-native');
const { PromptDialog } = require('botfuel-dialog');

class Weather extends PromptDialog {
  async dialogWillDisplay(userMessage, { matchedEntities, missingEntities }) {
    if (missingEntities.size === 0) {
      const date = matchedEntities.date && new Date(matchedEntities.date.values[0]);
      const formattedDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
      const location = matchedEntities.location && matchedEntities.location.values[0].value;
      const requestResult = await request.get({
        uri: `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=556a3f21bf184a0c808150832182304&q=${location}&format=json&date=${formattedDate}&lang=fr`,

      // api.openweathermap.org/data/2.5/weather?q=London&appid=e29bfe3fcc2dc3955d6d7206a21f705b
      // http://api.apixu.com/v1/current.json?key=1678c199d026408ea01144531182304&q=Paris',

     /* headers: {
        'User-Agent': 'nodejs',
      }, */
        headers: {
          'X-StackifyID': 'V1|fde1ddbe-ac79-48f6-8804-f9bc727acec1|C59032|CD1|',
          'X-WWO-Qpd-Left': '498',
          'access-control-allow-origin': '*',
          'access-control-allow-headers': 'content-type',
          'X-node': 'haproxy_flex_02',
          Vary: 'Accept-Encoding',
          Age: '0',
          'X-Cache': 'MISS',
          'X-Webcelerate': 'WebCelerate - www.ukfast.co.uk/web-acceleration.html',
          'Transfer-Encoding': 'chunked',
          Connection: 'keep-alive',
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=120',
          'Content-Type': 'application/json; charset=utf-8',
          Date: 'Tue, 24 Apr 2018 15:12:44 GMT',
          Expires: 'Tue, 24 Apr 2018 15:14:45 GMT',
          Via: 'WebCelerate',
        },
      });
      const parsedJSON = JSON.parse(requestResult);
      const weatherData = parsedJSON.data.current_condition[0];
      return { weatherData };
    }

    return null;
  }

}

Weather.params = {
  namespace: 'weather',
  entities: {
    location: {
      dim: 'city',
      priority: 10,
    },
    date: {
      dim: 'time',
    },
  },
};

module.exports = Weather;
