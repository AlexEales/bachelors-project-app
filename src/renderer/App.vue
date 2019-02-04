<template>
  <div id="app">
    <Chat v-bind:messages="messages" v-bind:process-input="processInput"/>
  </div>
</template>

<script>
  import Chat from './components/Chat'

  export default {
    name: 'bachelors-project-app',
    components: {
      Chat
    },
    data () {
      return {
        messages: [
          { 'text': 'Test User', 'isBot': false },
          { 'text': 'Test Bot', 'isBot': true },
          { 'text': 'Test User which is a bit longer than before.', 'isBot': false },
          { 'text': 'Test Bot which is a lot longer than before\nAnd includes new lines to test.', 'isBot': true }
        ]
      }
    },
    methods: {
      processInput (input) {
        this.messages.push({
          'text': input, 'isBot': false
        })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto');
</style>
