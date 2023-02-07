import multer from "multer";

//storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const fileName = `image-${Date.now()}.${file.originalname}`;
    cb(null, fileName);
  },
});

//filter configuration
const filter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(
      new Error("Invalid file type. Only .png .jpg and jpeg files are allowed")
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: filter,
});
export default upload;
