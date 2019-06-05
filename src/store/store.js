import Vue from 'vue';
import Vuex from 'vuex';

// register Vuex to Vue.js
Vue.use(Vuex)

// modules
import PostsModule from './modules/posts';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        posts: PostsModule
    }
});
