<template>
    <div class="wrapper">
        <div class="chat-area" v-bind:class="blurred">
            <ul>
                <li v-for="message in messages">
                    <div class="message" v-bind:class="{ user: !message.isBot, bot: message.isBot }">
                        <span style="white-space: pre-wrap">{{ message.text }}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="crisis" v-if="crisis">
            <span>
                <button v-on:click="closeCrisis">X</button>
                <strong>I've detected you may need a bit of help</strong>
            </span>
            <p>
                You might need more help than I can provide you. If you would like some more assistance I can get in
                touch with someone for you. Just let me know some information and I can sort it all out for you.
            </p>
            <p>
                If you don't want or require any additional help feel free to close this and I will still
                be here for you.
            </p>
            <input type="text" placeholder="Phone Number" style="margin-bottom: 10px"/>
            <input type="text" placeholder="Postcode"/>
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
    created: function () {
      window.onclick = this.resetTimer
    },
    data () {
      return {
        input: '',
        isBlurred: false,
        timeoutId: null
      }
    },
    computed: {
      blurred: function () {
        return this.isBlurred ? 'blur' : ''
      }
    },
    methods: {
      onSubmit: function () {
        this.processInput(this.input)
        this.input = ''
      },
      resetTimer: function () {
        this.goActive()
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(this.goInactive, 10000)
      },
      goInactive: function () {
        this.isBlurred = true
      },
      goActive: function () {
        this.isBlurred = false
      },
      closeCrisis: function () {
        this.crisis = false
      }
    },
    props: {
      messages: Array,
      processInput: Function,
      crisis: Boolean
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
        height: calc(100% - 50px);
        overflow-y: scroll;
        background-color: #eeeeee;
    }

    .crisis {
        position: fixed;
        margin: 2.5%;
        padding: 10px;
        bottom: 50px;
        top: auto;
        width: 90%;
        background-color: #ffbfbf;
        color: rgba(0, 0, 0, 0.9);
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 20px;
        border: 1px solid rgba(112, 112, 112, 0.22);
        font-family: Roboto,sans-serif;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.01px;
    }

    .blur {
        -webkit-filter: blur(5px);
        -ms-filter: blur(5px);
        filter: blur(5px);
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
        max-width: 45%;
        margin-top: 10px;
        margin-bottom: 10px;
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
        background-color: var(--msg-blue);
        color: rgba(255, 255, 255, 0.9);
    }

    .bot {
        margin-left: auto;
        margin-right: 10px;
        background-color: var(--msg-yellow);
        color: rgba(0, 0, 0, 0.9);
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
        position: fixed;
        bottom: 15px;
        left: auto;
        right: 4.5%;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid rgba(122, 122, 122, 0.22);
        background-color: #baf1be;
    }
</style>
