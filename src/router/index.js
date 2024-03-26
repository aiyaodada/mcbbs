import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/login',
            component: () => import('@/views/Login.vue')
        }, {
            path: '/404',
            component: () => import('@/views/404.vue')
        },
        {
            path: '/',
            component: () => import('@/views/Index.vue'),
            redirect: "/index",
            children: [
                {
                    path: '/index',
                    component: () => import('@/views/Index.vue')
                }
            ]
        }
    ]
})
// 全局路由守卫
//挂载路由导航守卫(路由拦截)
// router.beforeEach((to,from,next) => {
//     //to 将要访问的路径
//     //from 代表从哪一个路径跳转而来
//     //next()函数 代表放行
//     if(to.path === "/login"){
//         return next();
//     }else{
//         //获取token
//         const tokenStr = window.localStorage.getItem('token');
//         if(!tokenStr){
//             //如果未拿到token强制退出返回登录页
//             return next('/login')
//         }else{
//             next();
//             if (to.matched.length === 0) {
//                 next('/404') // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
//             }
//         }
//     }
// })
// 添加全局路由守卫
// 添加全局路由守卫
// 添加全局路由守卫
// router.beforeEach((to, from, next) => {
    // const token = getToken() // 获取token
    // 判断当前路由是否需要登录验证
    // if (to.path !== '/login' && to.path !== '/404') {
        // 判断用户是否已登录
        // if (!isAuthenticated(token)) {
            // 未登录，跳转到登录页面
            // next('/login')
        // } else {
            // 已登录，继续导航
            // next()
        // }
    // } else {
        // 不需要登录验证的页面，继续导航
        // next()
    // }
// })

// 模拟判断用户是否已登录
function isAuthenticated(token) {
    return !!token // 判断token是否存在
}

// 模拟获取token的方法
function getToken() {
    // 假设通过调用this.$getToken()方法来获取token
    return localStorage.getItem('token');
}

export default router;
// 路由重复点击
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
