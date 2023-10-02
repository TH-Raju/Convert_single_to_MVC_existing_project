import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import verifyAdmin from "../utils/verifyAdmin";
import {
  postUser,
  getAllUser,
  getAllProfile,
  getProfile,
  getSingleProfile,
  getUserByEmail,
  getAdminByEmail,
  patchUserLimit,
  patchUserByEmail,
  getUserByRole,
  getSellerByEmail,
  putToAdmin,
  putSeller,
  deleteBuyer,
  deleteSeller,
} from "../controllers/users.controller";

const router = Router();

router.post("/users", postUser);

//All User
router.get("/users", getAllUser);

router.get("/users/profiles", getAllProfile);
router.get("/users/:search", getProfile);

router.get("/users/profile/:id", getSingleProfile);

router.get("/users/:email", getUserByEmail);

router.get("/users/admin/:email", getAdminByEmail);

router.patch("/userLimitUpdate/:email", patchUserLimit);

router.patch("/userTypeUpdate/:email", patchUserByEmail);

router.get("/allUser/:role", getUserByRole);

//User get Seller permistion
router.get("/users/seller/:email", getSellerByEmail);

// Update user role Admin
router.put("/users/admin/:id", verifyJWT, putToAdmin);

// Update seller role verify
router.put("/users/seller/:id", verifyJWT, putSeller);

// Buyer delete
router.delete("/buyers/:id", verifyJWT, verifyAdmin, deleteBuyer);

// Seller delete
router.delete("/sellers/:id", verifyJWT, verifyAdmin, deleteSeller);

export default router;
