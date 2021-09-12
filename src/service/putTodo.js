import http from './http'

async function putTodo(params) {
    const { id } = params

    try {
        const res = await http.put(`todo/${id}`, {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default putTodo