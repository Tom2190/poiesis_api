/* 
Google Drive API:
Demonstration to:
1. upload 
2. delete 
3. create public URL of a file.
required npm package: googleapis
*/
import { google } from "googleapis";
// const path = require("path");
// import fs from "fs";

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
// const filePath = path.join(__dirname, "example.jpg");

function createDriveFunctions() {
  return {
    uploadFile: async (file) => {
      console.log("file", file);
      try {
        const response = await drive.files.create({
          requestBody: {
            name: file.filename,
            mimeType: file.mimetype,
          },
          media: {
            mimeType: file.mimetype,
            body: file,
          },
        });

        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    },
    // deleteFile: async (fileId) => {
    //   try {
    //     const response = await drive.files.delete({
    //       fileId: "YOUR FILE ID",
    //     });
    //     console.log(response.data, response.status);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },
    // generatePublicUrl: () => {
    //   try {
    //     const fileId = "YOUR FILE ID";
    //     await drive.permissions.create({
    //       fileId: fileId,
    //       requestBody: {
    //         role: "reader",
    //         type: "anyone",
    //       },
    //     });

    //     /*
    //   webViewLink: View the file in browser
    //   webContentLink: Direct download link
    //   */
    //     const result = await drive.files.get({
    //       fileId: fileId,
    //       fields: "webViewLink, webContentLink",
    //     });
    //     console.log(result.data);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },
  };
}

export default createDriveFunctions;
