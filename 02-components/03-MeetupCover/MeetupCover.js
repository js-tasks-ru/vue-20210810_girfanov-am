import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: {
      type: String,
      default: null,
      required: false,
    },
    image: {
      type: String,
      default: null,
      required: false,
    },
  },
  computed: {
    meetupImage() {
      return this.image ? { '--bg-url': `url('${this.image}')` } : null;
    },
  },

  template: `
    <div class="meetup-cover" :style="meetupImage">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
