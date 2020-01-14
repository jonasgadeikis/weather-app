import axios from 'axios';

export default {
    state: {
        weatherData: [],
    },

    getters: {
        weatherData(state) {
            return state.weatherData;
        },
    },

    mutations: {
        setWeatherData(state, payload) {
            const duplicate = state.weatherData.find(city => {
                return city.name === payload.name;
            });

            if (typeof duplicate === 'undefined') {
                state.weatherData.push(payload);
            }
        },
    },

    actions: {
        getData({commit}, payload) {
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
                console.log(error);
            });
        },
    },
}