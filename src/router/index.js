import Vue from 'vue'
import VueRouter from 'vue-router'

import before from './hooks'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },

    {
        path: '/',
        name: 'root',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "root" */ '../views/App.vue'),
        redirect: { name: "Home" },

        children: [{
            path: 'home',
            name: 'Home',
            component: () =>
                import ( /* webpackChunkName: "home" */ '../views/Home.vue'),
        }, {
            path: 'about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }, {
            path: 'todo',
            name: 'todo',
            component: () =>
                import ( /* webpackChunkName: "todo" */ '../views/Todo.vue')
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