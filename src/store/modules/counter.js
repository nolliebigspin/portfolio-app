export default {
    namespaced: true,
    strict: true,
    state: {
        count: 0
    },
    getters: {
        count(state) {
            return state.count;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        changeBy(state, payload) {
            state.count += payload.amount;
        },
    }
}