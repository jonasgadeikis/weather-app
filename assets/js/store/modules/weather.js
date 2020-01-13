import axios from 'axios';

export default {
    state: {

    },

    getters: {

    },

    mutations: {

    },

    actions: {
        getData({commit}, payload) {
            axios.get('/api/weather', {
                params: {
                    city: payload.city,
                    apiKey: payload.apiKey,
                }
            }).then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    },
}