// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Toast,NavBar,Icon,Card,Tab, Tabs,Button,Cell, CellGroup,Dialog} from 'vant'
import 'lib-flexible/flexible'
import { SwipeCell } from 'vant';
import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(animated)
Vue.use(Icon).use(Dialog).use(Button).use(Card).use(NavBar).use(SwipeCell).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Toast).use(Cell).use(CellGroup);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
