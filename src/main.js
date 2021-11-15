import Vue from 'vue'
import App from './App.vue'

// Vue i18n
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import tr from './lang/tr';
import en from './lang/en';

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: window.App.locale,
  messages: window.App.locale === 'tr' ? tr : en,
});

// axios
import axios from 'axios';

window.axios = axios;
Vue.prototype.$http = axios;

// router
import router from './router'

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
