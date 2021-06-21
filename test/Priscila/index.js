import createServer from "../../src/shared/server/server.js";
import { getToken } from "../../src/shared/jwt/jwt.js";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const PORT = 3000;
async function main() {
  await createServer({ port: PORT });

  const token = getToken({ id: "FTlNPqZkYvQxwtMb0DBM" });

  const form = new FormData();
  // Datos en común
  form.append("title", "Un nuevo cuento 111");
  form.append("genre", "poetry");

  /**
   * Datos para textos sin pdf
   */

  // form.append("hasPdf", "false");
  // form.append("content", "lorem ipsum");

  /**
   * Datos para textos con pdf
   */

  const filePath = "./test/Priscila/fileToUpload/worksheetskindergarten.pdf";
  form.append("demo", fs.createReadStream(filePath));
  form.append("hasPdf", "true");

  try {
    const resPost = await axios({
      method: "post",
      url: "http://localhost:3000/texts",
      data: form,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
        "x-access-token": token,
      },
    });
    console.log("crear texto res:", resPost.data);
  } catch (err) {
    console.log(err.message);
  }

  // servidor.close();
  // mongoClient.close();
}

main();
