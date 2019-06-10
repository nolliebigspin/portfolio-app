import { StoreTypes } from '../types';

export default {
    strict: true,
    state: {
        posts: []
    },
    getters: {
        [StoreTypes.posts.getters.POSTS](state) {
            return state.posts;
        },
        [StoreTypes.posts.getters.POSTS_FILTER_MOTTO](state, filter) {
            return state.posts.filter(post => post.motto === filter);
        },
        [StoreTypes.posts.getters.POST_BY_ID](state, id) {
            return state.posts.filter(post => post._id === id);
        }
    },
    mutations: {
        [StoreTypes.posts.mutations.SET_POSTS](state, posts) {
            state.posts = posts;
        },
    },
    actions: {
        [StoreTypes.posts.actions.FETCH_ALL](ctx) {
            fetch('/api/posts?sort=date+dsc')
                .then((response) => {
                    response.json().then(data => {
                        ctx.commit(StoreTypes.posts.mutations.SET_POSTS, data);
                    })
                })
                .catch((error) => {
                    alert("Failed to fetch data: " + error);
                });
        }
    }
}