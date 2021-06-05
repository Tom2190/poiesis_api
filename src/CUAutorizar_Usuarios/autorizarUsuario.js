async function crearAutorizador(dao,enviador) {

    return {
        autorizarUsuario: async (idUsuario) => {
            
            const usuario = await dao.getById(idUsuario)
            usuario.autorizar()
            await dao.update(usuario)
            console.log(await dao.getAll())
            
            let to = usuario.email
            let subject = '¡Usuario actualizado!'
            let texto = 'Su usuario ahora puede publicar textos en el Área Común.'
            await enviador.enviar(texto, to, subject)
        }
    }

}

export { crearAutorizador }