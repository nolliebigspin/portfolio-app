import { StoreTypes } from '../types';

export default {
    strict: true,
    state: {
        count: 0
    },
    getters: {
        [StoreTypes.counter.getters.COUNT](state) {
            return state.count;
        }
    },
    mutations: {
        [StoreTypes.counter.mutations.CHANGE_BY](state, payload) {
            state.count += payload.amount;
        },
        [StoreTypes.counter.mutations.SET_TO](state, payload) {
            state.count = payload.value
        }
    }
}