import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import App from './App.vue'

export var eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
});
