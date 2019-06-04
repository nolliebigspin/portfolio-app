import Vue from 'vue';
import Vuex from 'vuex';

// register Vuex to Vue.js
Vue.use(Vuex)

// modules
import posts from './modules/posts';

export default new Vuex.Store({
    strict: true,
    modules: {
        posts
    }
});
