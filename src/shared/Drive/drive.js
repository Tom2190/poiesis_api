/*
  Author: Priscila Bey
*/
import { google } from "googleapis";
import fs from "fs";
import { getDriveConfig } from "../../config.js";

const diverConfig = getDriveConfig();

const CLIENT_ID = diverConfig.CLIENT_ID;
const CLIENT_SECRET = diverConfig.CLIENT_SECRET;
const REDIRECT_URI = diverConfig.REDIRECT_URI;

const REFRESH_TOKEN = diverConfig.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

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

function createDriveFunctions() {
  return {
    uploadFile: async (fileName, tempFilePath) => {
      try {
        const response = await drive.files.create({
          requestBody: {
            name: fileName,
            mimeType: "application/pdf",
          },
          media: {
            mimeType: "application/pdf",
            body: fs.createReadStream(tempFilePath),
          },
        });

        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    generatePublicUrl: async (id) => {
      try {
        await drive.permissions.create({
          fileId: id,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });

        /*
      webViewLink: View the file in browser
      webContentLink: Direct download link
      */
        const result = await drive.files.get({
          fileId: id,
          fields: "webViewLink, webContentLink",
        });

        return result.data.webViewLink;
      } catch (error) {
        console.log(error.message);
      }
    },
    // deleteFile: async (id) => {
    //   try {
    //     const response = await drive.files.delete({
    //       fileId: id,
    //     });
    //     console.log(response.data, response.status);
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // },
  };
}

export default createDriveFunctions;
