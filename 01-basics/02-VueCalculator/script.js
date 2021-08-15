import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstArgument: null,
      secondArgument: null,
      operator: null,
    };
  },
  computed: {
    result() {
      if (this.operator === 'sum') {
        return this.firstArgument + this.secondArgument;
      } else if (this.operator === 'divide') {
        return this.fixedResult;
      } else if (this.operator === 'subtract') {
        return this.firstArgument - this.secondArgument;
      } else if (this.operator === 'multiply') {
        return this.firstArgument * this.secondArgument;
      }
      return 0;
    },
    fixedResult() {
      let divisionResult = this.firstArgument / this.secondArgument;
      if (divisionResult != parseInt(divisionResult)) {
        return divisionResult.toFixed(2);
      }
      return divisionResult;
    },
  },
}).mount('#app');
