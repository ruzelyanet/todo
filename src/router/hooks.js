function before(router) {
    router.beforeEach(async(to, from, next) => {
        const token = localStorage.getItem("jwt");

        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (!token) {
                return next({ name: 'login' })
            } else {
                return next()
            }
        } else {
            if (token && to.name === 'login') {
                return next({ name: 'Home' })
            }
        }

        return next()

    })
}

export default before;