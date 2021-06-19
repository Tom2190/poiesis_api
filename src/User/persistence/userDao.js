function createUserDao(firebaseDb) {
  return {
    add: async (user) => {
      const collection = await firebaseDb.collection('users').get();
      const validateUser = collection.docs.some(doc => {
          const newUser = { ...doc.data(), id: doc.id }
          return user.email.toLowerCase() === newUser.email.toLowerCase() || user.dni===newUser.dni
      });
      if (validateUser) {
        return null;
      }
      return (await firebaseDb.collection('users').add(user)).id;
    },
    getById: async (id) => {
      const doc = await firebaseDb.collection("users").doc(id).get();
      return { ...doc.data(), id: doc.id }
    },
    getAll: async () => {
      let users = [];
      const collection = await firebaseDb.collection('users').get();
      collection.forEach(doc => {
        const user = { ...doc.data(), id: doc.id }
        users.push(user);
      });
      return users
    },
    update: async (user) => {
      try {
        await firebaseDb.collection("users").doc(user.id).update(user)
        return true;
      } catch (error) {
        return false
      }
    },
  }
}

export default createUserDao