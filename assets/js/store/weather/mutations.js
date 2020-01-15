export default {
    setWeatherData(state, payload) {
        state.weatherData.push(payload);
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