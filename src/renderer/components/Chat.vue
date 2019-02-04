<template>
    <div class="wrapper">
        <div class="chat-area">
            <ul>
                <li v-for="message in messages">
                    <div class="message" v-bind:class="{ user: !message.isBot, bot: message.isBot }">
                        {{ message.text }}
                    </div>
                </li>
            </ul>
        </div>
        <div class="input-wrapper">
            <input type="text" placeholder="What's on your mind?" v-model="input"
                   v-on:keypress.enter="onSubmit">
            <button class="submit" v-on:click="onSubmit"> > </button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'chat',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      onSubmit: function () {
        this.processInput(this.input)
        this.input = ''
      }
    },
    props: {
      messages: Array,
      processInput: Function
    }
  }
</script>

<style scoped>
    .chat-area {
        position: fixed;
        top: 0;
        bottom: auto;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #eeeeee;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .message {
        display: table;
        max-width: 240px;
        margin-top: 10px;
        padding: 10px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        border: 1px solid rgba(112, 112, 112, 0.22);
        font-family: Roboto,sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.01px;
    }

    .user {
        margin-left: 10px;
        margin-right: auto;
        background-color: #6fd4e1;
        color: rgba(255, 255, 255, 0.9);
    }

    .bot {
        margin-left: auto;
        margin-right: 10px;
        background-color: #ffe9af;
        color: rgba(0, 0, 0, 0.7);
    }

    .input-wrapper {
        position: fixed;
        top: auto;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background-color: #eeeeee;
    }

    input {
        position: relative;
        left: 10px;
        padding: 10px;
        width: 95%;
        height: 40px;
        box-sizing: border-box;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        border: 1px solid rgba(112, 112, 112, 0.22);
        font-family: Roboto, sans-serif;
    }

    .submit {
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid rgba(122, 122, 122, 0.22);
        background-color: #baf1be;
    }
</style>
