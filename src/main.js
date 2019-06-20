// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Toast,NavBar,Icon,Card  } from 'vant'
import 'lib-flexible/flexible'

Vue.use(Icon);
Vue.use(Card);
Vue.use(NavBar)
Vue.use(Swipe).use(SwipeItem).use(Toast);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
