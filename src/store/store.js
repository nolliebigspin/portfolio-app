import Vue from 'vue';
import Vuex from 'vuex';

// register Vuex to Vue.js
Vue.use(Vuex)

// modules
import counter from './modules/counter';

export default new Vuex.Store({
    strict: true,
    modules: {
        counter
    }
});
