import express from "express";
// import multer from 'multer';
const router = express.Router();

import {register, login, logOut, validateUsername, getPublic, getCurrentUser, updateTheme} from '../controllers/user';
import auth from '../middlewares/auth';

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, './uploads');
//   }
// });

// const fileFilter = (req: any, file: any, cb: any) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 2
//   },
//   fileFilter: fileFilter
// });

router.post("/register", register);
router.post("/login", login);
router.get("/logOut", logOut);updateTheme
router.get("/getCurrentUser", auth, getCurrentUser);
router.post("/updateTheme", auth, updateTheme);
router.post("/getPublic", getPublic);
router.post("/validateUsername", validateUsername);

router.get("/auth", auth, (req: any, res: any, next: any) => {
  res.status(200).json({
    mes: "Auth failed"
  });
})

export default router;