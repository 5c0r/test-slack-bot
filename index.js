const { createEventAdapter } = require('@slack/events-api');
const { WebClient } = require('@slack/web-api');

const port = process.env.PORT || 3000;
const token = process.env.SLACK_TOKEN;

// Instantiates a client
const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const web = new WebClient(token);

slackEvents.on('app_mention', async (event) => {
    console.log('app_mention', event)
    const res = await web.chat.postMessage({ channel: '#test', text: 'Someone needs my help ?!' });
})

slackEvents.start(port);








