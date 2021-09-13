import http from './http'

async function getUser(id) {
    try {
        const res = await http.get(`users/${id}`)
        return res
    } catch (e) {
        throw e;
    }
}

export default getUser