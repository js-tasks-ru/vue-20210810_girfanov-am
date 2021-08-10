import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstArgument: 0,
      secondArgument: 0,
      result: 0,
      operator: '',
    };
  },
  computed: {
    sum() {
      return parseInt(this.firstArgument) + parseInt(this.secondArgument);
    },
    subtract() {
      return parseInt(this.firstArgument) - parseInt(this.secondArgument);
    },
    multiply() {
      return parseInt(this.firstArgument) * parseInt(this.secondArgument);
    },
    divide() {
      let divisionResult = this.firstArgument / this.secondArgument;
      divisionResult = Number.isInteger(divisionResult) == true ? divisionResult : divisionResult.toFixed(2);
      return divisionResult;
    },
  },
  methods: {
    onChange() {
      if (this.operator === 'sum') {
        this.result = this.sum;
      } else if (this.operator === 'divide') {
        this.result = this.divide;
      } else if (this.operator === 'subtract') {
        this.result = this.subtract;
      } else if (this.operator === 'multiply') {
        this.result = this.multiply;
      }
    },
  },
}).mount('#app');
