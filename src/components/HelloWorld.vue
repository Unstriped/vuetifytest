<template>
  <v-container>
    <v-container>
      <v-row>
        <v-btn class="ma-2" color="primary" @click="shuffle(numbers)">
          reset</v-btn
        >
        <v-btn class="ma-2" color="error" @click="stop()"> stop</v-btn>
        <v-switch v-model="ezmode" class="mx-2" label="EZ MODE"></v-switch>
      </v-row>
      <v-row class="ma-2"> Seconds: {{ seconds }} </v-row>
    </v-container>

    <div v-if="loss">
      YOU LOST IT ALL
      <v-img src="@/assets/sad.png" />
    </div>

    <div v-if="win">
      YOU ARE WINNER
      <v-img src="@/assets/success.png" />
    </div>

    <div class="gridy" v-else>
      <template v-for="number in numbers">
        <v-btn
          :color="number === currentNum + 1 && ezmode ? 'success' : 'normal'"
          :key="number"
          :disabled="clickedNumbers.includes(number) || loss || stopped"
          @click="clickNumber(number)"
          >{{ number }}
        </v-btn>
      </template>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'HelloWorld',

  data: () => ({
    number: 50,
    numbers: [],
    clickedNumbers: [],
    startingSeconds: 60,
    seconds: 0,
    currentNum: 0,
    win: false,
    ezmode: false,
    stopped: false,
  }),

  mounted() {
    this.init();
    this.shuffle(this.numbers);
  },

  beforeDestroy() {
    this.stopTimer();
  },

  computed: {
    loss() {
      if (this.seconds === 0) return true;
      return false;
    },
  },

  methods: {
    init() {
      this.numbers = Array.from({ length: this.number }, (_, index) => index + 1);
    },
    shuffle(array) {
      this.stopped = false;
      this.win = false;
      this.clickedNumbers = [];
      this.currentNum = 0;

      this.stopTimer();
      for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        Vue.set(array, i, array[j]);
        Vue.set(array, j, temp);
      }
      this.numbers = array;

      this.startTimer();
    },
    stop() {
      this.stopTimer();
      this.stopped = true;
    },

    stopTimer() {
      clearInterval(this.timer);
    },
    startTimer() {
      this.seconds = this.startingSeconds;
      this.timer = setInterval(() => {
        this.seconds -= 1;
      }, 1000);
    },

    clickNumber(number) {
      if (number === (this.currentNum + 1)) {
        this.currentNum += 1;
        this.clickedNumbers.push(number);
      } else {
        this.stopTimer();
        this.seconds = 0;
      }
      if (this.clickedNumbers.length === this.numbers.length) {
        this.stopTimer();
        this.win = true;
      }
    },

  },
};
</script>

<style lang="scss" scoped>
.gridy {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 15px;
}
</style>
