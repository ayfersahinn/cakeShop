import express from "express";
import {
  getAllProducts,
  getProductById,
  getProductsByCategory,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/category/:categoryId", getProductsByCategory);

export default router;
