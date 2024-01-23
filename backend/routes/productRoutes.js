import express from "express";
import { createProduct, getProductById, getProducts, updateProduct, deleteProduct, createProductReview, getTopProducts } from "../controllers/productController.js";
import {protect, admin} from '../middleware/authMiddleware.js'
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.get('/top', getTopProducts)
router.route('/:id').get(checkObjectId, getProductById).put(protect, admin, checkObjectId, updateProduct).delete(protect, admin, checkObjectId, deleteProduct)
router.route('/:id/reviews').post(protect, createProductReview, checkObjectId)

export default router