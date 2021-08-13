import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      emails: [
        { value: 'Eliseo@gardner.biz', isMatch: false },
        { value: 'Jayne_Kuhic@sydney.com', isMatch: false },
        { value: 'Nikita@garfield.biz', isMatch: false },
        { value: 'Lew@alysha.tv', isMatch: false },
        { value: 'Hayden@althea.biz', isMatch: false },
        { value: 'Presley.Mueller@myrl.com', isMatch: false },
        { value: 'Dallas@ole.me', isMatch: false },
        { value: 'Mallory_Kunze@marie.org', isMatch: false },
        { value: 'Meghan_Littel@rene.us', isMatch: false },
        { value: 'Carmen_Keeling@caroline.name', isMatch: false },
        { value: 'Veronica_Goodwin@timmothy.net', isMatch: false },
        { value: 'Oswald.Vandervort@leanne.org', isMatch: false },
        { value: 'Kariane@jadyn.tv', isMatch: false },
        { value: 'Nathan@solon.io', isMatch: false },
        { value: 'Maynard.Hodkiewicz@roberta.com', isMatch: false },
        { value: 'Christine@ayana.info', isMatch: false },
        { value: 'Preston_Hudson@blaise.tv', isMatch: false },
        { value: 'Vincenza_Klocko@albertha.name', isMatch: false },
        { value: 'Madelynn.Gorczany@darion.biz', isMatch: false },
        { value: 'Mariana_Orn@preston.org', isMatch: false },
        { value: 'Noemie@marques.me', isMatch: false },
        { value: 'Khalil@emile.co.uk', isMatch: false },
        { value: 'Sophia@arianna.co.uk', isMatch: false },
        { value: 'Jeffery@juwan.us', isMatch: false },
        { value: 'Isaias_Kuhic@jarrett.net', isMatch: false },
      ],
      searchString: '',
    };
  },
  methods: {
    calculateIsMatch() {
      if (this.searchString === '') {
        this.emails.forEach((email) => {
          email.isMatch = false;
        });
        return;
      }

      for (let index = 0; index < this.emails.length; index++) {
        if (this.emails[index].value.toLowerCase().includes(this.searchString.toLowerCase())) {
          this.emails[index].isMatch = true;
        } else {
          this.emails[index].isMatch = false;
        }
      }
    },
  },
}).mount('#app');
