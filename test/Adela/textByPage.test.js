import createServer from "../../src/shared/server/server.js";
import assert from "assert";
import axios from "axios";

const first9Fiction = {
  genre: "fiction",
  textsIds: [
    "2lQhlL9dhKJ8rqeQp9Wc",
    "84CEu6FFcBmxRqoWEFbk",
    "ELCo3aajJoSeQn0C4CC1",
    "I26OJXlHnzbBsiNeaVSR",
    "YjhWc8k6Wvy9KH9cceDe",
    "Zqsj76SOb82Ey5sYPbsG",
    "wQnJR5qnJ2hkxyFhhGSk",
    "zqLSVc821TQqHqqIfITh",
  ],
};
const first9NonFiction = {
  genre: "non_fiction",
  textsIds: [
    "3gUtoquszgF7QRHS245L",
    "4cK2M8qgLebgbA2M21GD",
    "HT5SQ9PsOVk65kDKRE23",
    "ht8PDsNVhNoONTatvnQB",
    "lhpn9RVTvYSPvoPeHIvo",
    "skZjdg0N0no8AeGtzq7G",
    "t3vmY4igeMd4rkZJIVYx",
    "uiZH6cTCID0xKGub1INg",
    "uxWb17TaSIIXwz4bQuf1",
  ],
};
const first9Poetry = {
  genre: "poetry",
  textsIds: [
    "0JsJYDbpK4Mrfa7d6wxh",
    "3x9nWDnhqQsFFcLnNGlL",
    "ErvbZA7wu9bFnUHNY6VU",
    "KLPCQXY4nwTUrUxAdeJO",
    "P8l0k5zP2JPQ74US5mig",
    "WCbL4BEpm7D51pKlksTe",
    "jN212L7ZR4OveJEd1Qid",
    "mweT292ZDlmuq9H5K1wk",
    "py5SNaoERV3LDOdRJMF7",
  ],
};
const errorStatus = 400;

let server;

describe("server", () => {
  beforeEach(async () => {
    server = await createServer({ port: 3000 });
  });

  afterEach(() => {
    server.close();
  });

  describe("get paginated", () => {
    it("trae los 9 primeros del género ficción", async () => {
      const res = await axios.get(
        "http://localhost:3000/texts?page=1&genre=fiction"
      );
      const textsIds = res.data.content
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((text) => text.id);

      assert.deepStrictEqual(textsIds, first9Fiction.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9Fiction.genre);
    });

    it("trae los 9 primeros del género no ficción", async () => {
      const res = await axios.get(
        "http://localhost:3000/texts?page=1&genre=non_fiction"
      );
      const textsIds = res.data.content
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((text) => text.id);

      assert.deepStrictEqual(textsIds, first9NonFiction.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9NonFiction.genre);
    });

    it("trae los 9 primeros del género poetry", async () => {
      const res = await axios.get(
        "http://localhost:3000/texts?page=1&genre=poetry"
      );
      const textsIds = res.data.content
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((text) => text.id);

      assert.deepStrictEqual(textsIds, first9Poetry.textsIds);
      assert.deepStrictEqual(res.data.content[0].genre, first9Poetry.genre);
    });

    it("trae los 9 primeros del género drama (error)", async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/texts?page=1&genre=drama"
        );
      } catch (error) {
        assert.deepStrictEqual(error.response.status, errorStatus);
      }
    });
  });
});
