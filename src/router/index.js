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
            path: 'profile',
            name: 'profile',
            component: () =>
                import ( /* webpackChunkName: "profile" */ '../views/app/user/Profile.vue'),
        }, {
            path: 'todo',
            name: 'todo',
            component: () =>
                import ( /* webpackChunkName: "todo" */ '../views/app/todo/Index.vue'),
            redirect: { name: 'todo-list' },
            children: [{
                path: 'list',
                name: 'todo-list',
                component: () =>
                    import ( /* webpackChunkName: "todo-list" */ '../views/app/todo/List.vue'),
            }, {
                path: ':id',
                name: 'todo-item',
                component: () =>
                    import ( /* webpackChunkName: "todo-page" */ '../views/app/todo/TodoPage.vue'),
                props: true,
            }, {
                path: ':id/edit',
                name: 'todo-edit',
                component: () =>
                    import ( /* webpackChunkName: "todo-edit" */ '../views/app/todo/TodoEdit.vue'),
                props: true
            }, {
                path: ':id/create',
                name: 'todo-create',
                component: () =>
                    import ( /* webpackChunkName: "todo-create" */ '../views/app/todo/TodoCreate.vue')
            }]
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