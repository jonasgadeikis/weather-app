import axios from "axios";

export default {
    getData({commit}, payload) {
        commit('toggleLoadingState');
        commit('hideErrorMessage');
        axios.get('/api/weather', {
            params: {
                city: payload.city,
                apiKey: payload.apiKey,
            }
        }).then(response => {
            const data = {
                name: response.data.name,
                temp: response.data.temp,
            };

            commit('setWeatherData', data);
        }).catch(error => {
            const data = {
                message: error.response.data.message,
            };

            commit('showErrorMessage', data);
        }).finally(() => {
            commit('toggleLoadingState');
        });
    },
}