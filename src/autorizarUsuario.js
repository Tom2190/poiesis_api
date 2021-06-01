import { autorizarUsuario } from './Usuario.js'

async function crearAutorizador(enviador, baseDeDatos) {

    return {
        autorizar: async (usuario) => {
            const usuarioAutorizado = await autorizarUsuario(usuario)
            await baseDeDatos.update(usuarioAutorizado)

            let to = usuario.email
            let subject = '¡Usuario actualizado!'
            let texto = 'Su usuario ahora puede publicar textos en el Área Común.'

            await enviador.enviar(texto, to, subject)
        }
    }

}

export { crearAutorizador }