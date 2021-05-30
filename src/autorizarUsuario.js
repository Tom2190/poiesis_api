async function autorizarUsuario(enviador,baseDeDatos,usuario) {

    await baseDeDatos.updateAutorizado(usuario)

    let to = usuario.email
    let subject = '¡Usuario Actualizado!'
    let texto = 'Su usuario ahora puede publicar textos en el Área Común.'

    await enviador.enviar(texto, to, subject)
}

export { autorizarUsuario }