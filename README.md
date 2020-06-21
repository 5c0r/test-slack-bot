### Introduction
- Just a Slack bot tryout project with its `Events API` , nothing really special , just want to see how well GAE can be used for small/simple project

### Good
- Easy to create project
- Creating Slack App , getting a Slack bot to work is almost seamless

### Not-so-good
- node-slack-sdk is not *well* documented, https://github.com/slackapi/node-slack-sdk/issues/911
- It's kind of difficult to wire this with your own express, due to Slack challenge endpoint and `events endpoint` , where you have to confirm the challenge endpoint by running on your local/ deploy it to confirm challenge endpoint and continue developing

### TIL
- GAE used nginx as proxy to the current node instance, that's why `PORT` environment variable should be set in `app.yaml` 
- Should be possible to build your own Events API handler , just extract part of the source code that's meaningful to you

### Try this out
- You should provide your own environment variable , depends on your Cloud provider

### Total effort 
- Create Slack team/ add Slack app ~ 1.5h 
- Making it work with GAE deploy ~ 1.5h
- Reading the node-slack-sdk source code to see why express routing does not work as expected ~1h :)

### Reference
- https://github.com/slackapi/node-slack-sdk
- https://api.slack.com/
- Google App Engine docs https://cloud.google.com/community/tutorials/run-expressjs-on-google-app-engine

