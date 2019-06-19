// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Toast } from 'vant'
import { Icon } from 'vant'
import 'lib-flexible/flexible'
import $ from 'jquery'




// Vue.use($);
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem).use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
