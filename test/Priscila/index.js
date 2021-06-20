import createServer from "../../src/shared/server/server.js";
import { getToken } from "../../src/shared/jwt/jwt.js";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const PORT = 8080;
async function main() {
  await createServer({ port: PORT });

  const token = getToken({ id: "FTlNPqZkYvQxwtMb0DBM" });

  const filePath = "./test/Priscila/fileToUpload/worksheetskindergarten.pdf";
  const form = new FormData();
  form.append("demo", fs.createReadStream(filePath));
  form.append("title", "Un nuevo cuento 100");
  form.append("genre", "poesia");
  form.append("hasPdf", "true");

  try {
    const resPost = await axios({
      method: "post",
      url: "http://localhost:8080/texts",
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
