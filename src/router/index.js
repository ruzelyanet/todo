import Vue from 'vue'
import VueRouter from 'vue-router'

import before from './hooks'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },

    {
        path: '/',
        name: 'root',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "root" */ '../views/app/Index.vue'),
        redirect: { name: "Home" },

        children: [{
            path: 'home',
            name: 'Home',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../views/app/home/Index.vue'),
        }, {
            path: 'todo',
            name: 'todo',
            component: () =>
                import ( /* webpackChunkName: "todo" */ '../views/app/todo/Index.vue')
        }, {
            path: '*',
            name: 'any',
            redirect: { name: 'Home' }
        }]
    }
]

const router = new VueRouter({
    linkActiveClass: "active",
    routes,
    mode: "history"
})

before(router);

export default router