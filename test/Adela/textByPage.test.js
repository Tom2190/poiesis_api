import createServer from "../../src/shared/server/server.js";
import assert from "assert";
import axios from "axios";

const first9Fiction = {genre:"fiction", textsIds:[1, 2, 3, 4, 5, 6, 7, 8, 9]}
const first9NonFiction = {genre:"non_fiction", textsIds:[11, 12, 13, 14,15, 16, 17, 18]}
const first9Poetry = {genre:"poetry", textsIds:[20, 21, 22, 23,24, 25, 26, 27]}
const twoPagePoetry = {genre:"poetry", textsIds:[1, 2, 3, 4, 5, 6, 7, 8, 9]}

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
        "http://localhost:8080/texts?page=1&genre=fiction"
      );
      const textsIds = 
        res.data.content
        .map(text => text.idText)
        .sort((a, b) =>  a - b);

      assert.deepStrictEqual(textsIds, first9Fiction.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9Fiction.genre);
    });

    it("trae los 9 primeros del género no ficción", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=non_fiction"
      );
      const textsIds = 
        res.data.content
        .map(text => text.idText)
        .sort((a, b) =>  a - b);

      assert.deepStrictEqual(textsIds, first9NonFiction.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9NonFiction.genre);
    });

    it("trae los 9 primeros del género poetry", async () => {
      const res = await axios.get(
        "http://localhost:8080/texts?page=1&genre=poetry"
      );
      const textsIds = 
        res.data.content
        .map(text => text.idText)
        .sort((a, b) =>  a - b);

      assert.deepStrictEqual(textsIds, first9Poetry.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9Poetry.genre);
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
