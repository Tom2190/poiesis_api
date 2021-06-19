import createServer from "../../src/shared/server/server.js";
import assert from "assert";
import axios from "axios";

const primeros9Ficcion = {
  page: 1,
  content: [
    { id: 1, nombretexto: "ejemplo1", genre: "ficcion" },
    { id: 2, nombretexto: "ejemplo2", genre: "ficcion" },
    { id: 3, nombretexto: "ejemplo3", genre: "ficcion" },
    { id: 4, nombretexto: "ejemplo4", genre: "ficcion" },
    { id: 5, nombretexto: "ejemplo5", genre: "ficcion" },
    { id: 6, nombretexto: "ejemplo6", genre: "ficcion" },
    { id: 7, nombretexto: "ejemplo7", genre: "ficcion" },
    { id: 8, nombretexto: "ejemplo8", genre: "ficcion" },
    { id: 9, nombretexto: "ejemplo9", genre: "ficcion" },
  ],
};

const primeros9NoFiccion = {
  page: 1,
  content: [
    { id: 11, nombretexto: "ejemplo11", genre: "no_ficcion" },
    { id: 12, nombretexto: "ejemplo12", genre: "no_ficcion" },
    { id: 13, nombretexto: "ejemplo13", genre: "no_ficcion" },
    { id: 14, nombretexto: "ejemplo14", genre: "no_ficcion" },
    { id: 15, nombretexto: "ejemplo15", genre: "no_ficcion" },
    { id: 16, nombretexto: "ejemplo16", genre: "no_ficcion" },
    { id: 17, nombretexto: "ejemplo17", genre: "no_ficcion" },
    { id: 18, nombretexto: "ejemplo18", genre: "no_ficcion" },
    { id: 19, nombretexto: "ejemplo19", genre: "no_ficcion" },
  ],
};

const primeros9Poesia = {
  page: 1,
  content: [
    { id: 21, nombretexto: "ejemplo21", genre: "poesia" },
    { id: 22, nombretexto: "ejemplo22", genre: "poesia" },
    { id: 23, nombretexto: "ejemplo23", genre: "poesia" },
    { id: 24, nombretexto: "ejemplo24", genre: "poesia" },
    { id: 25, nombretexto: "ejemplo25", genre: "poesia" },
    { id: 26, nombretexto: "ejemplo26", genre: "poesia" },
    { id: 27, nombretexto: "ejemplo27", genre: "poesia" },
    { id: 28, nombretexto: "ejemplo28", genre: "poesia" },
    { id: 29, nombretexto: "ejemplo29", genre: "poesia" },
  ],
};

const pagina2Poesia = {
  page: 2,
  content: [{ id: 30, nombretexto: "ejemplo30", genre: "poesia" }],
};

const errorStatus = 403;

let server;

describe("server", () => {
  beforeEach(async () => {
    server = await createServer({ port: 8080 });
  });

  afterEach(() => {
    server.close();
  });

  describe("get paginated", () => {
    it("trae los 9 primeros del género ficción", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=ficcion"
      );
      assert.deepStrictEqual(res.data, primeros9Ficcion);
    });

    it("trae los 9 primeros del género no ficción", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=no_ficcion"
      );
      assert.deepStrictEqual(res.data, primeros9NoFiccion);
    });

    it("trae los 9 primeros del género poesia", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=poesia"
      );
      assert.deepStrictEqual(res.data, primeros9Poesia);
    });

    it("trae poesia número 10 (en página 2)", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=2&genre=poesia"
      );
      assert.deepStrictEqual(res.data, pagina2Poesia);
    });

    it("trae los 9 primeros del género drama (error)", async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/texts?page=1&genre=drama"
        );
      } catch (error) {
        assert.deepStrictEqual(error.response.status, errorStatus);
      }
    });
  });
});
