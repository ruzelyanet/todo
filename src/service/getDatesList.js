import http from './http'

async function getDatesList(params) {
    try {
        const res = await http.get('dates', {
            params: {
                ...params
            }
        })
        return res
    } catch (e) {
        throw e;
    }
}

export default getDatesList