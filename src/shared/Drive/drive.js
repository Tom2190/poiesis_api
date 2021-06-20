// /*
// Google Drive API:
// Demonstration to:
// 1. upload
// 2. delete
// 3. create public URL of a file.
// required npm package: googleapis
// */
// import { google } from "googleapis";
// // const path = require("path");
// import path from "path";
// import { fileURLToPath } from "url";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// import fs from "fs";

// const oauth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );

// oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// const drive = google.drive({
//   version: "v3",
//   auth: oauth2Client,
// });

// /*
// filepath which needs to be uploaded
// Note: Assumes example.jpg file is in root directory,
// though this can be any filePath
// */

// function createDriveFunctions() {
//   return {
//     uploadFile: async (fileName, tempFilePath) => {
//       try {
//         const response = await drive.files.create({
//           requestBody: {
//             name: fileName,
//             mimeType: "application/pdf",
//           },
//           media: {
//             mimeType: "application/pdf",
//             body: fs.createReadStream(tempFilePath),
//           },
//         });

//         return response.data;
//       } catch (error) {
//         // TODO manejar este error
//         console.log(error.message);
//       }
//     },
//     // generatePublicUrl: (id) => {
//     //   try {
//     //     await drive.permissions.create({
//     //       fileId: id,
//     //       requestBody: {
//     //         role: "reader",
//     //         type: "anyone",
//     //       },
//     //     });

//     //     /*
//     //   webViewLink: View the file in browser
//     //   webContentLink: Direct download link
//     //   */
//     //     const result = await drive.files.get({
//     //       fileId: id,
//     //       fields: "webViewLink, webContentLink",
//     //     });
//     //     console.log(result.data);
//     //   } catch (error) {
//     //     console.log(error.message);
//     //   }
//     // },
//     // deleteFile: async (fileId) => {
//     //   try {
//     //     const response = await drive.files.delete({
//     //       fileId: "YOUR FILE ID",
//     //     });
//     //     console.log(response.data, response.status);
//     //   } catch (error) {
//     //     console.log(error.message);
//     //   }
//     // },
//   };
// }

// export default createDriveFunctions;
