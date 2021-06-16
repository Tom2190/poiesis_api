import axios from "axios";

function crearClienteRest(serverData) {
  const { url } = serverData;

  return {
    autorizar: async (idUsuario) => {
      return await sendRequest({
        url,
        method: "post",
        data: { id: idUsuario },
      });
    },
  };
}

async function sendRequest(req) {
  try {
    return await axios(req);
  } catch (error) {
    if (error.response) {
      const NE = new Error(
        `error ${error.response.status} enviado desde el server: ${error.response.data.message}`
      );
      NE.status = error.response.status;
      NE.message = error.response.data.message;
      throw NE;
    } else {
      throw new Error("error al enviar la peticion");
    }
  }
}

export { crearClienteRest };
