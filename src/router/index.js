import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/login.vue'
import home from '../components/home.vue'


Vue.use(VueRouter)

const routes = [
  {path:"/login", component: login },
  {path:"/", redirect:'/login'},
  {path:"/home", component: home}
]

const router = new VueRouter({
  routes
})
// 攔截路由導航 類似axios.interceptors
router.beforeEach((to,from,next) => {
  // to 將要訪問的路徑
  // from 代表從哪個路徑跳轉而來
  // next 是一個函數 表示放行
  // next():放行       next('/login'):強制跳轉
  if(to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('login')
  // 上面都沒執行要加next() 才會終止函數
  next()

})
export default router

