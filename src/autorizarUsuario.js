import { crearEnviadorEmails } from './enviadorEmails.js'

async function autorizarUsuario(baseDeDatos,usuario,service,user,pass) {

    await baseDeDatos.updateAutorizado(usuario)

    let to = usuario.email
    let subject = '¡Usuario Actualizado!'
    let texto = 'Su usuario ahora puede publicar textos en el Área Común.'

    
    const enviador = await crearEnviadorEmails(service, user, pass, to, subject)
    await enviador.enviar(texto)
}

export { autorizarUsuario }