function createTextDao(firebaseDb) {
  const texts = [
    { id: 1, title: "ejemplo1", genre: "ficcion" },
    { id: 2, title: "ejemplo2", genre: "ficcion" },
    { id: 3, title: "ejemplo3", genre: "ficcion" },
    { id: 4, title: "ejemplo4", genre: "ficcion" },
    { id: 5, title: "ejemplo5", genre: "ficcion" },
    { id: 6, title: "ejemplo6", genre: "ficcion" },
    { id: 7, title: "ejemplo7", genre: "ficcion" },
    { id: 8, title: "ejemplo8", genre: "ficcion" },
    { id: 9, title: "ejemplo9", genre: "ficcion" },
    { id: 10, title: "ejemplo10", genre: "ficcion" },
    { id: 11, title: "ejemplo11", genre: "no_ficcion" },
    { id: 12, title: "ejemplo12", genre: "no_ficcion" },
    { id: 13, title: "ejemplo13", genre: "no_ficcion" },
    { id: 14, title: "ejemplo14", genre: "no_ficcion" },
    { id: 15, title: "ejemplo15", genre: "no_ficcion" },
    { id: 16, title: "ejemplo16", genre: "no_ficcion" },
    { id: 17, title: "ejemplo17", genre: "no_ficcion" },
    { id: 18, title: "ejemplo18", genre: "no_ficcion" },
    { id: 19, title: "ejemplo19", genre: "no_ficcion" },
    { id: 20, title: "ejemplo20", genre: "no_ficcion" },
    { id: 21, title: "ejemplo21", genre: "poesia" },
    { id: 22, title: "ejemplo22", genre: "poesia" },
    { id: 23, title: "ejemplo23", genre: "poesia" },
    { id: 24, title: "ejemplo24", genre: "poesia" },
    { id: 25, title: "ejemplo25", genre: "poesia" },
    { id: 26, title: "ejemplo26", genre: "poesia" },
    { id: 27, title: "ejemplo27", genre: "poesia" },
    { id: 28, title: "ejemplo28", genre: "poesia" },
    { id: 29, title: "ejemplo29", genre: "poesia" },
    { id: 30, title: "ejemplo30", genre: "poesia" },
  ];

  return {
    addUnique: async (textData) => {
      const collection = await firebaseDb.collection("texts").get();
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
      const collection = await firebaseDb.collection("texts").get();
      const textsByUser = collection.docs.filter((doc) => {
        const text = { ...doc.data() };
        return text.userId === userId;
      });
      return textsByUser;
    },
    getByGenre: (page, selectedGenre) => {
      const textsToShowByPage = 9;
      let paginatedTexts = [];
      switch (selectedGenre) {
        case "ficcion":
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "ficcion") {
              paginatedTexts.push(texts[index]);
            }
          }
          return [
            ...paginatedTexts.slice(
              page * textsToShowByPage - textsToShowByPage,
              page * textsToShowByPage
            ),
          ];
        case "no_ficcion":
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "no_ficcion") {
              paginatedTexts.push(texts[index]);
            }
          }
          return [
            ...paginatedTexts.slice(
              page * textsToShowByPage - textsToShowByPage,
              page * textsToShowByPage
            ),
          ];
        case "poesia":
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "poesia") {
              paginatedTexts.push(texts[index]);
            }
          }
          return [
            ...paginatedTexts.slice(
              page * textsToShowByPage - textsToShowByPage,
              page * textsToShowByPage
            ),
          ];
        default:
          throw new Error("Género no encontrado");
      }
    },
  };
}

export default createTextDao;
