import http from './http'

async function getTodo(params) {
    try {
        const res = await http.get('todo', {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default getTodo