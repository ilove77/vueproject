import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 引入初始css 導到全局
import "./assets/css/global.css"
// 引入字體圖標css
// import "./assets/fonts/style.css"
import axios from "axios"
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.interceptors.response.use( (res) => {
  let data = res.data
  return data
},(err) => {
    console.log(err)
}) 
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
