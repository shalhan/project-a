// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


//Global Component
import Spinner from './components/global/Spinner.vue'
import Confirmation from './components/global/Confirmation.vue'
Vue.component('spinner', Spinner)
Vue.component('confirmation', Confirmation)


Vue.config.productionTip = false

var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus;
        }
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



