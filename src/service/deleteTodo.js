import http from './http'

async function deleteTodo(params) {
    const { id } = params
    try {
        const res = await http.delete(`todo/${id}`, {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default deleteTodo