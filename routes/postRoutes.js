// import express from "express";
// const router = express.Router();
// import {
//   createPost,
//   deletePost,
//   getAllPosts,
//   getPost,
//   updatePost,
// } from "../controllers/postControllers.js";
// import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

// import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";

// // ...


// router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);
// router
//   .route("/:slug")
//   .put(authGuard, adminGuard, updatePost)
//   .delete(authGuard, adminGuard, deletePost)
//   .get(getPost);
// router.route("/:slug").put(authGuard, adminGuard, uploadPicture.single('photo'), updatePost);
// export default router;



import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postControllers.js";
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";
import { uploadPicture } from "../middleware/uploadPictureMiddleware.js";

const router = express.Router();

router.route("/")
  .post(authGuard, adminGuard, uploadPicture.single('photo'), createPost)
  .get(getAllPosts);

router.route("/:slug")
  .get(getPost)
  .put(authGuard, adminGuard, uploadPicture.single('photo'), updatePost)
  .delete(authGuard, adminGuard, deletePost);

export default router;