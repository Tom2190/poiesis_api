const texts = [
    {code:"REGISTER_USER", text:"¡Gracias por registrarte!", subject:"¡Enhorabuena! Nuevx alumnx"},
    {code:"AUTH_USER", text:"¡Usuario actualizado!", subject:"Su usuario ahora puede publicar textos en el Área Común"}
];

function createEmailTextDao(){
    return {
        getDataText: async(code) => {
            return texts.filter(t => t.code===code)[0]
        }
    }
}

export default createEmailTextDao