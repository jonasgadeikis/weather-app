import axios from "axios";

export default {
    getData({commit, state}, payload) {
        commit('hideErrorMessage');
        const duplicate = state.weatherData.find(city => {
            return city.name === payload.city;
        });

        if (typeof duplicate === 'undefined') {
            commit('toggleLoadingState');
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
        } else {
            state.errorMessage = 'Duplicate city given.';
        }
    },
}