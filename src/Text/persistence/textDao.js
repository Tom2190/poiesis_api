function createTextDao(firebaseDb) {
  return {
    addUnique: async (textData) => {
      const collection = await firebaseDb.collection("texts").get();
      const docUser = await firebaseDb
        .collection("users")
        .doc(textData.userId)
        .get();
      const user = docUser.data();
      const userName = `${user.name} ${user.lastName}`;
      textData.userName = userName;
      const exists = collection.docs.some((doc) => {
        const text = { ...doc.data() };
        return text.title === textData.title;
      });
      if (exists) {
        return null;
      } else {
        return (await firebaseDb.collection("texts").add(textData)).id;
      }
    },
    getAllByUser: async ({ userId }) => {
      let texts = [];
      const collection = await firebaseDb.collection("texts").get();
      collection.forEach((doc) => {
        const text = { ...doc.data(), id: doc.id };
        if (text.userId === userId) {
          texts.push(text);
        }
      });
      return texts;
    },
    getById: async (id) => {
      const doc = await firebaseDb.collection("texts").doc(id).get();
      const date = doc.data().createdAt.toDate();
      return { ...doc.data(), id: doc.id, createdAt: date };
    },
    getByGenre: async (page, selectedGenre, textsToShowByPage) => {
      const collection = await firebaseDb.collection("texts").get();
      // const textsToShowByPage = 9;
      let paginatedTexts = [];

      collection.forEach((doc) => {
        // transformar firestore timestamp a Date
        //Mandar al if:
        const date = doc.data().createdAt.toDate();
        const text = {
          ...doc.data(),
          createdAt: date,
          id: doc.id,
        };
        if (text.genre === selectedGenre) {
          paginatedTexts.push(text);
        }
      });
      return [
        ...paginatedTexts.slice(
          page * textsToShowByPage - textsToShowByPage,
          page * textsToShowByPage
        ),
      ];
    },
  };
}

export default createTextDao;
