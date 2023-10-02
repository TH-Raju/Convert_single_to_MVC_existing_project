import { Router } from "express";
import verifyJWT from "../utils/verifyJWT";
import verifySeller from "../utils/verifySeller";
const router = Router();
import {
  getAllProduct,
  getProductByEmail,
  postProduct,
  putProduct,
  putProductById,
  deleteProduct,
} from "../controllers/product.controller";

//All product get
router.get("/products", getAllProduct);

//Seller product get
router.get("/products/:email", getProductByEmail);

//Seller add product
router.post("/addProduct", verifyJWT, verifySeller, postProduct);

router.put("/addProduct/addAdvertisement/:id", putProduct);

//advertise data remove
router.put("/addProduct/removeAdvertisement/:id", putProductById);

// Seller delete
router.delete("/products/:id", verifyJWT, verifySeller, deleteProduct);

export default router;
