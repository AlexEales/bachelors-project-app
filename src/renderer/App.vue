<template>
  <div id="app">
    <Chat v-bind:crisis="isCrisis" v-bind:messages="messages" v-bind:process-input="processInput"/>
  </div>
</template>

<script>
  import Chat from './components/Chat'

  const dialogflow = require('dialogflow')
  const uuid = require('uuid')
  const projectId = 'alex-year-project-2018'
  // Uniquely identify session.
  const sessionId = uuid.v4()
  // Create new session.
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: 'C:/Users/alexe/OneDrive/University/Year 3/Dissertation/alex-year-project-2018-ad6a4749d755.json'
  })
  const sessionPath = sessionClient.sessionPath(projectId, sessionId)

  export default {
    name: 'bachelors-project-app',
    components: {
      Chat
    },
    data () {
      return {
        messages: [
          { 'text': 'Hi I`m Sam! Feel free to ask me any questions you may have about mental health or how to get help.', 'isBot': true },
        ],
        isCrisis: false
      }
    },
    methods: {
      processInput: async function (input) {
        // Push user message to chat.
        this.messages.push({
          'text': input, 'isBot': false
        })
        this.messages.push({
          'text': 'Thinking...', 'isBot': true
        })
        const result = await this.dialogflowRequest(input)
        console.log(result)
        this.messages.pop()
        this.messages.push({
          'text': result, 'isBot': true
        })
      },
      dialogflowRequest: async function (utterance) {
        // Form DialogFlow request.
        const request = {
          session: sessionPath,
          queryInput: {
            text: {
              text: utterance,
              languageCode: 'en'
            }
          }
        }
        // Send request, detect responses and push result to chat.
        console.log(request)
        const responses = await sessionClient.detectIntent(request)
        console.log('Detected intent')
        const result = responses[0].queryResult
        console.log(`  Query: ${result.queryText}`)
        console.log(`  Response: ${result.fulfillmentText}`)
        if (result.intent) {
          console.log(`  Intent: ${result.intent.displayName}`)
        } else {
          console.log(`  No intent matched.`)
        }
        return result.fulfillmentText
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  :root {
    --msg-blue: #7BC2EE;
    --msg-yellow: #FFE89F;
  }

  button {
    font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
    background: Transparent no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }
</style>
