import '../css/app.scss';
import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store/index';
import GlobalComponents from './globalComponents';

GlobalComponents.forEach(component => {
    Vue.component(component.name, component);
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});