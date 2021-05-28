import axios from 'axios'

function crearClienteRest(serverData) {

    const { url } = serverData

    return {
        getAll: async () => {
            return await sendRequest({ url })
        },
        getById: async (unId) => {
            return await sendRequest({ url, params: { id: unId } })
        },
        post: async (usuario) => {
            return await sendRequest({ url, method: 'post', data: usuario })
        },
        put: async (usuario) => {
            return await sendRequest({ url: url + `/${usuario.id}`, method: 'put', data: usuario })
        },
        deleteById: async (unId) => {
            return await sendRequest({ url: url + `/${unId}`, method: 'delete' })
        }
    }
}

async function sendRequest(req) {
    try {
        return await axios(req)
    } catch (error) {
        if (error.response) {
            const NE = new Error(`error ${error.response.status} enviado desde el servidor: ${error.response.data.message}`)
            NE.status = error.response.status
            NE.message = error.response.data.message
            throw NE
        } else {
            throw new Error('error al enviar la peticion')
        }
    }
}

export { crearClienteRest }