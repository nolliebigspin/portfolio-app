export const StoreTypes = {
    posts: {
        getters: {
            POSTS: 'POSTS_POSTS',
            POSTS_FILTER_MOTTO: 'POSTS_POSTS_FILTER_MOTTO',
        },
        mutations: {
            SET_POSTS: 'POSTS_SET_POSTS'
        },
        actions: {
            FETCH_ALL: 'POSTS_FETCH_ALL'
        }
    }
} 