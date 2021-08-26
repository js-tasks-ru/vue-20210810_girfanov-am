import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      required: true,
      default: null,
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
      curentMeetup: null,
    };
  },
  watch: {
    async meetupId() {
      this.fetchMeetup();
    },
  },
  async created() {
    this.fetchMeetup();
  },
  methods: {
    async fetchMeetup() {
      this.isLoading = true;
      this.curentMeetup = null;
      this.error = null;
      try {
        this.curentMeetup = await fetchMeetupById(this.meetupId);
        this.isLoading = false;
      } catch (e) {
        this.isLoading = false;
        this.error = e.message;
      }
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="curentMeetup" :meetup="curentMeetup"></meetup-view>

      <ui-container v-else-if="isLoading">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container v-else-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
