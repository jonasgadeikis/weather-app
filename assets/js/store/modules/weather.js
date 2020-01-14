import axios from 'axios';

export default {
    state: {
        weatherData: [],
        errorMessage: '',
    },

    getters: {
        weatherData(state) {
            return state.weatherData;
        },

        errorMessage(state) {
            return state.errorMessage;
        },
    },

    mutations: {
        setWeatherData(state, payload) {
            const duplicate = state.weatherData.find(city => {
                return city.name === payload.name;
            });

            if (typeof duplicate === 'undefined') {
                state.weatherData.push(payload);
            } else {
                state.errorMessage = 'Duplicate city given.';
            }
        },

        showErrorMessage(state, payload) {
            state.errorMessage = payload.message;
        },

        hideErrorMessage(state) {
            state.errorMessage = '';
        },
    },

    actions: {
        getData({commit}, payload) {
            commit('hideErrorMessage');
            axios.get('/api/weather', {
                params: {
                    city: payload.city,
                    apiKey: payload.apiKey,
                }
            }).then(response => {
                const data = {
                    name: response.data.name,
                    temp: response.data.main.temp,
                };

                commit('setWeatherData', data);
            }).catch(error => {
                const data = {
                    message: error.response.data.message,
                };

                commit('showErrorMessage', data);
            });
        },
    },
}