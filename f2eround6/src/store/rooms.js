import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' //axios用於對api存取

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        Rooms: {
            items: []
        },
    },
    actions: {
        getRoomsItems(context) {
            axios({
                method: "get",
                headers: {
                    Accept: "application/json",
                    Authorization:
                        "Bearer TyAhyPQ0BDpZZyZkG8wGmSGh0RQAb8frGPjKyMvf4XbPv3zXyENPv5csmmKq",
                },
                url: "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",
            })
                .then((res) => {
                    context.commit('ROOMSITEMS', res.data.items);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mutations: {
        ROOMSITEMS(state, payload) {
            state.Rooms.items = payload
        },
    },
    getters: {
        items(state) {
            return state.Rooms.items
        }
    }
};