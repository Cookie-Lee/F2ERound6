import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' //axios用於對api存取
import RoomsModules from './rooms'
import TodoListModules from './todolist'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        scrollOptions: {
            duration: 600,
            easing: "linear",
        },
        Reservation: {
            isSuccess: false,
            bookingData: {},
        },
    },
    actions: {
        reservationSubmit(context, { roomid, name, tel, date }) {
            axios({
                method: "post",
                headers: {
                    Accept: "application/json",
                    Authorization:
                        "Bearer TyAhyPQ0BDpZZyZkG8wGmSGh0RQAb8frGPjKyMvf4XbPv3zXyENPv5csmmKq",
                    "Content-Type": "application/json",
                },
                url: `https://challenge.thef2e.com/api/thef2e2019/stage6/room/${roomid}`,
                data: JSON.stringify({
                    name: name,
                    tel: tel,
                    date: date,
                }),
            })
                .then((res) => {
                    context.commit('RESERVATIONSUCCESS', res.data.success);
                    context.commit('RESERVATIONBOOKING', res.data.booking);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },
    mutations: {
        RESERVATIONSUCCESS(state, payload) {
            state.Reservation.isSuccess = payload
        },
        RESERVATIONBOOKING(state, payload) {
            state.Reservation.bookingData = payload
        },
    },
    getters: {
        isSuccess(state) {
            return state.Reservation.isSuccess
        },
        bookingData(state) {
            return state.Reservation.bookingData
        },
    },
    modules: {
        RoomsModules,
        TodoListModules,
    },
});