/*
  Author: Alex Costa
*/
import createErrorFactory from "../../shared/errors/ErrorFactory.js";

function createChangePasswordUser(daoUsers) {
  const errorFactory = createErrorFactory();

  return {
    changePassword: async (userData) => {
      const user = await daoUsers.getById(userData.userId);
      if(!user){
        errorFactory.throwUserNotFoundError("Usuario no encontrado");
      }
      if (userData.currentPassword === user.password) {
        user.password = userData.newPassword;
        await daoUsers.update(user);
      } else{
        errorFactory.throwInvalidDataError("Contraseña Invalida");
      }
    },
  };
}

export default createChangePasswordUser;
