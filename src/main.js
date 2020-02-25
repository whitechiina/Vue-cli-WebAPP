import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
import './assets/css/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('../src/assets/img/me.jpg'),//加载中图片，一定要有，不然会一直重复加载占位图
  error: require('../src/assets/img/me.jpg')  //加载失败图片
});

Object.defineProperty(Vue.prototype, '$cookie', { value: Cookies })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
