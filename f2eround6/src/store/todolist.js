import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        todolist: [
            { id: 1, todo: "交女朋友", done: false },
            { id: 2, todo: "財務自由", done: false },
            { id: 3, todo: "當碼農", done: true },
        ],
    },
    actions: {
        todoDone(context, { id, done }) {
            context.commit('TODOLIST', { id, done });
        },
    },
    mutations: {
        TODOLIST(state, { id, done }) {
            state.todolist.find((item) => {
                return item.id === id
            }).done = done;
        },
    },
    getters: {
        countTodoDone() {
            let todolist = this.$store.state.todolist;
            return todolist.filter((item) => {
                return item.done === true;
            });
        },
    }
};