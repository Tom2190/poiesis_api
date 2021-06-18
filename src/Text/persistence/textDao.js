

function createTextDao() {
  const texts = [
    { id: 1, nombretexto: "ejemplo1", genre: "ficcion", },
    { id: 2, nombretexto: "ejemplo2", genre: "ficcion", },
    { id: 3, nombretexto: "ejemplo3", genre: "ficcion", },
    { id: 4, nombretexto: "ejemplo4", genre: "ficcion", },
    { id: 5, nombretexto: "ejemplo5", genre: "ficcion", },
    { id: 6, nombretexto: "ejemplo6", genre: "ficcion", },
    { id: 7, nombretexto: "ejemplo7", genre: "ficcion", },
    { id: 8, nombretexto: "ejemplo8", genre: "ficcion", },
    { id: 9, nombretexto: "ejemplo9", genre: "ficcion", },
    { id: 10, nombretexto: "ejemplo10", genre: "ficcion", },
    { id: 11, nombretexto: "ejemplo11", genre: "no_ficcion", },
    { id: 12, nombretexto: "ejemplo12", genre: "no_ficcion", },
    { id: 13, nombretexto: "ejemplo13", genre: "no_ficcion", },
    { id: 14, nombretexto: "ejemplo14", genre: "no_ficcion", },
    { id: 15, nombretexto: "ejemplo15", genre: "no_ficcion", },
    { id: 16, nombretexto: "ejemplo16", genre: "no_ficcion", },
    { id: 17, nombretexto: "ejemplo17", genre: "no_ficcion", },
    { id: 18, nombretexto: "ejemplo18", genre: "no_ficcion", },
    { id: 19, nombretexto: "ejemplo19", genre: "no_ficcion", },
    { id: 20, nombretexto: "ejemplo20", genre: "no_ficcion", },
    { id: 21, nombretexto: "ejemplo21", genre: "poesia", },
    { id: 22, nombretexto: "ejemplo22", genre: "poesia", },
    { id: 23, nombretexto: "ejemplo23", genre: "poesia", },
    { id: 24, nombretexto: "ejemplo24", genre: "poesia", },
    { id: 25, nombretexto: "ejemplo25", genre: "poesia", },
    { id: 26, nombretexto: "ejemplo26", genre: "poesia", },
    { id: 27, nombretexto: "ejemplo27", genre: "poesia", },
    { id: 28, nombretexto: "ejemplo28", genre: "poesia", },
    { id: 29, nombretexto: "ejemplo29", genre: "poesia", },
    { id: 30, nombretexto: "ejemplo30", genre: "poesia", }
  ];

  return {
    addUnique: async (textData) => {
      const exists = texts.some((e) => {
        return e[title] === textData[title];
      });
      if (exists) {
        return { added: 0 };
      } else {
        texts.push(textData);
        return { added: 1 };
      }
    },
    getAllByUser: async ({ userId }) => {
      return texts.filter((txt) => txt.userId === userId);
    },
    getByGenre: (page, selectedGenre) => {
      const textsToShowByPage = 9;
      let paginatedTexts = [];
      switch (selectedGenre) {
        case 'ficcion':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "ficcion") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(page * textsToShowByPage - textsToShowByPage, page * textsToShowByPage)]
        case 'no_ficcion':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "no_ficcion") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(page * textsToShowByPage - textsToShowByPage, page * textsToShowByPage)]
        case 'poesia':
          for (let index = 0; index < texts.length; index++) {
            if (texts[index].genre == "poesia") {
              paginatedTexts.push(texts[index])
            }
          }
          return [...paginatedTexts.slice(page * textsToShowByPage - textsToShowByPage, page * textsToShowByPage)]
        default:
          throw new Error("Género no encontrado")
      }
    }
  };
}

export default createTextDao;
