async function crearAutorizador(enviador) {

    return {
        autorizarUsuario: async (usuario) => {
            
            usuario.autorizar()
            
            let to = usuario.email
            let subject = '¡Usuario actualizado!'
            let texto = 'Su usuario ahora puede publicar textos en el Área Común.'
            await enviador.enviar(texto, to, subject)
        }
    }

}

export { crearAutorizador }