export default {
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

    toggleLoadingState(state) {
        state.loadingState = !state.loadingState;
    },
};