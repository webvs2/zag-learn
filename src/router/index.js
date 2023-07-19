//router 
import {createRouter,createWebHashHistory} from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '@/App.vue'
let  router = createRouter({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
      meta:{
        title:'首页'
      }
    }],
    history: createWebHashHistory(),
})
// Vue.use(VueRouter)
export default router
        