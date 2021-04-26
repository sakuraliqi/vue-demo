/*
 * @Descripttion: 
 * @version: 
 * @Author: liqi
 * @Date: 2021-04-19 20:45:20
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-23 23:34:28
 */
import Vue from 'vue'
import App from './App.vue'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
import router from './router/index.js'
import JUI from './components/JUI';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ViewUI);
Vue.use(JUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
