import http from './http'

async function postTodo(params) {
    try {
        const res = await http.post(`todo`, {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default postTodo