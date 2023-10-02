import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import { postWishList, getWishList } from "../controllers/wishlist.controller";
const router = Router();

// Wishlist post add wishlist
router.post("/wishlist", postWishList);

//get wishlist my wishlist
router.get("/wishlists", verifyJWT, getWishList);

export default router;
