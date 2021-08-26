import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      required: true,
      default: null,
    },
  },
  computed: {
    defaultIcon() {
      let agendaItemIcon = agendaItemIcons[this.agendaItem.type];
      return `/assets/icons/icon-${agendaItemIcon}.svg`;
    },
    defaultTitle() {
      return agendaItemDefaultTitles[this.agendaItem.type];
    },
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="defaultIcon" class="icon" :alt="defaultIcon" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 v-if="agendaItem.title != null" class="agenda-item__title">{{ agendaItem.title }}</h3>
        <h3 v-else class="agenda-item__title">{{ defaultTitle }}</h3>
        <p v-if="agendaItem.type == 'talk'" class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot">agendaItem.speaker</span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description != null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
