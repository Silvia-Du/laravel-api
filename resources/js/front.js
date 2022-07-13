

window.Vue = require('vue');

import App from './App.vue';



const app = new Vue({
    el: '#app',

    render : n => n(App)
});



