import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入基本样式
import './assets/css/base.css'
// 引入vue-sun-ui
import SunUi from 'vue-sun-ui'
// 导入vue-sun-ui样式
import 'vue-sun-ui/dist/vue-sun-ui.css'
import Highlight from './assets/js/highlight'

import ShowCode from './components/ShowCode.vue'
import PropsList from './components/PropsList.vue'
Vue.component('show-code',ShowCode)
Vue.component('props-list',PropsList)

Vue.use(Highlight)
// 安装SunUi
Vue.use(SunUi)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')