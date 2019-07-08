// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem,Switch,Toast,NavBar,Icon,Card,Tab, Tabs,Button,Cell, CellGroup,AddressEdit,Dialog,Checkbox,CheckboxGroup,Area,Popup,RadioGroup,Radio} from 'vant'
import 'lib-flexible/flexible'
import { SwipeCell } from 'vant';
import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(Icon).use(Button).use(Card).use(NavBar).use(SwipeCell).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Toast).use(Cell).use(CellGroup).use(AddressEdit)
.use(animated).use(Dialog).use(Checkbox).use(CheckboxGroup).use(Area).use(Popup).use(Switch).use(RadioGroup).use(Radio);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
