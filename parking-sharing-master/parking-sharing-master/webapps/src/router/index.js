import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import InfoPage from "../views/home/InfoPage.vue";
Vue.use(VueRouter)
let router = new VueRouter({
    routes,
    base: window.__POWERED_BY_QIANKUN__ ? '/system-web-new' : '/',
    mode: 'hash',
    saveScrollPosition: true,
})



// router.beforeEach((to, from, next) =>{
//     next()
// })

    
export default  router
    
