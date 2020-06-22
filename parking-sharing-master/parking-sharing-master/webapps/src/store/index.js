import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules'
import actions from './actions'
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const devMode = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules,
  actions,
  strict: devMode,
  plugins: devMode ? [createLogger()] : []
});
