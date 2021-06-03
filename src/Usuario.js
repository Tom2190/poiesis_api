let nextId = 1

function crearUsuario(datos, id = null) {
    
    const usuario = {
        autorizar() {
            usuario.publicarTextos = true
        }
    }

    if (!datos.nombreCompleto) {
        throw crearErrorDatosInvalidos('Falta el nombre')
    } else {
        usuario.nombreCompleto = datos.nombreCompleto
    }

    if(!datos.email) {
        throw crearErrorDatosInvalidos('Ingreso inválido del email')
    } else {
        usuario.email = datos.email
    }

    if (!datos.diaHorario) {
        throw crearErrorDatosInvalidos('Falta indicar el día y horario predilecto')
    } else {
        usuario.diaHorario = datos.diaHorario
    }

    if (!datos.frecuenciaEscritura) {
        throw crearErrorDatosInvalidos('Falta indicar la frecuencia de escritura')
    } else {
        usuario.frecuenciaEscritura = datos.frecuenciaEscritura
    }

    if (!datos.generoEscritura) {
        throw crearErrorDatosInvalidos('Falta indicar su género de escritura predilecto')
    } else {
        usuario.generoEscritura = datos.generoEscritura
    }

    if (!datos.celular) {
        throw crearErrorDatosInvalidos('Falta el celular')
    } else {
        usuario.celular = datos.celular
    }

    if (id) {
        usuario.id = Number(id)
    } else if (!isNaN(Number(datos.id))) {
        usuario.id = Number(datos.id)
    } else {
        usuario.id = nextId++
    }

    usuario.publicarTextos = false

    return usuario
}

export { crearUsuario }