function createUserDao() {
  const users = []

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
      const searchedUser = users.find(u => u.id === id)
      return searchedUser
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