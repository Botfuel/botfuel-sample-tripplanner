# botfuel-sample-tripplanner

This sample bot is used in the [**Trip Planner demo**](https://docs.botfuel.io/platform/demos/trip-planner).

## Create an app

* Create a new app on Botfuel Trainer (https://app.botfuel.io). See the [Getting Started tutorial](https://docs.botfuel.io/platform/tutorials/getting-started) for how to create a new app.

* Add an intent with lable `trip` with the following training phrases for examples:

  * What are the available planes to Madrid?
  * I would like to book a flight to Paris.
  * I want to book a trip.
  * Can I buy a ticket to New-York?

* Add an intent with lable `name` with the following training phrases for examples:

  * My name is Bob.

* Add an intent with lable `greetings` with the following training phrases for examples:
  * Hi
  * Hello

  You can get examples of intents here : https://github.com/Botfuel/botfuel-sample-tripplanner/blob/master/intents.xlsx

## How to run the bot

Clone the repository:

```shell
git clone git@github.com:Botfuel/botfuel-sample-tripplanner.git
```

Install dependencies:

```shell
cd botfuel-sample-tripplanner
npm install
```

Start the bot:

```shell
BOTFUEL_APP_TOKEN=<YOUR_BOT_ID> BOTFUEL_APP_ID=<YOUR_BOTFUEL_APP_ID> BOTFUEL_APP_KEY=<YOUR_BOTFUEL_APP_KEY> npm start
```

If you set your app credentials right, you should see:

```shell
2017-12-07T16:12:09.131Z - info: [Config] You didn't specify any config file, using default config.
2017-12-07T16:12:09.131Z - info: [Environment] BOTFUEL_APP_TOKEN=<YOUR_BOT_ID>
2017-12-07T16:12:09.133Z - info: [Environment] BOTFUEL_APP_ID=<YOUR_BOTFUEL_APP_ID>
2017-12-07T16:12:09.133Z - info: [Environment] BOTFUEL_APP_KEY=<YOUR_BOTFUEL_APP_KEY>
```

Try typing `I want to travel`!

## Need help ?

* See [**Getting Started**](https://docs.botfuel.io/platform/tutorials/getting-started) to learn how to run a bot in minutes.
* See [**Concepts**](https://docs.botfuel.io/platform/concepts) for explanations about the internals of the SDK.

## License

See the [**License**](LICENSE.md) file.
