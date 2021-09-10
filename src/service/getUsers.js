import http from './http'

async function getUsers(params) {
    try {
        const res = await http.get('users', {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default getUsers