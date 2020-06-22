import Vue from 'vue';
import CnetUI from '@sy/cnet-ui';
import '@sy/cnet-ui/dist/assets/style.css';
import App from './App.vue';
import store from './store';
import router from './router'
import './public-path';
import './assets/global.less';
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, Axios)
Vue.use(CnetUI);
Vue.config.productionTip = false;
let instance = null;

function render () {
  instance = new Vue({
    router: router,
    store: store,
    render: h => h(App)
  }).$mount('#app');
}

// 单独开发环境
if (!window.__POWERED_BY_QIANKUN__) {
  console.warn('stand alone env: ', window.__POWERED_BY_QIANKUN__);
  render();
}
