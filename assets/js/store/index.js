import Vue from 'vue';
import Vuex from 'vuex';
import Weather from './weather';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Weather,
    },
})