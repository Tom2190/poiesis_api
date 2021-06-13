import multer from "multer";
import util from "util";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/Text/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const extname = filetypes.test(file.originalname.split(".")[1]);
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: solo se aceptan archivos en formato pdf!");
    }
  },
}).single("demo");

let fileUpload = util.promisify(upload);

export default fileUpload;
