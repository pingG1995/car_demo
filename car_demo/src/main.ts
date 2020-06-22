import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@sy/cnet-ui/dist/assets/style.css';
import CnetUI from '@sy/cnet-ui';
Vue.config.productionTip = false
Vue.use(CnetUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
