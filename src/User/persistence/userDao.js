function createUserDao() {
  const users = []
  const testUser = {
    name: "Tomás",
    lastName: "Fernández",
    email: "fernandez.abrevaya@gmail.com",
    password: "123456",
    chosenDateTime: "Martes y Jueves",
    writingFrecuency: "Alta",
    writingGenre: "Ficción",
    phone: "1123318739",
    dni: "12345678",
    id: 0
  }
  users.push(testUser)

  return {
    add: async (user) => {
      const emailExists = users.some( u => u.email.toLowerCase()===user.email.toLowerCase());
      const dniExists = users.some( u => u.dni===user.dni);
      if(emailExists || dniExists){
        return false;
      }
      users.push(user);
      return true;
    },
    getById: async (id) => {
      return users.find(u => u.id === id)
    },
    getAll: async () => {
      return [...users]
    },
    update: async (user) => {
      const index = users.findIndex(u => u.id == user.id)
      if (index === -1) {
        return false;
      }
      users.splice(index, 1, user);
      return true;
    },
  }
}

export default createUserDao