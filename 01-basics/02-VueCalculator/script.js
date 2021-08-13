import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      firstArgument: null,
      secondArgument: null,
      operator: '',
    };
  },
  computed: {
    result: function () {
      if (this.operator === 'sum') {
        return parseInt(this.firstArgument) + parseInt(this.secondArgument);
      } else if (this.operator === 'divide') {
        let fixedResult = parseInt(this.firstArgument) / parseInt(this.secondArgument);
        if (fixedResult != parseInt(fixedResult)) {
          fixedResult = fixedResult.toFixed(2);
        }
        return fixedResult;
      } else if (this.operator === 'subtract') {
        return parseInt(this.firstArgument) - parseInt(this.secondArgument);
      } else if (this.operator === 'multiply') {
        return parseInt(this.firstArgument) * parseInt(this.secondArgument);
      }
      return 0;
    },
  },
  methods: {
    onChange() {
      this.result;
    },
  },
}).mount('#app');
