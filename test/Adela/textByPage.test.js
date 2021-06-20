import createServer from "../../src/shared/server/server.js";
import assert from "assert";
import axios from "axios";



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
    it.only("trae los 9 primeros del género ficción", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=ficcion"
      );
      // assert.deepStrictEqual(res.data, primeros9Ficcion);
      console.log(res.data);
    });

    it("trae los 9 primeros del género no ficción", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=no_ficcion"
      );
      // assert.deepStrictEqual(res.data, primeros9NoFiccion);
    });

    it("trae los 9 primeros del género poesia", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=poesia"
      );
      // assert.deepStrictEqual(res.data, primeros9Poesia);
    });

    it("trae poesia número 10 (en página 2)", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=2&genre=poesia"
      );
      // assert.deepStrictEqual(res.data, pagina2Poesia);
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
