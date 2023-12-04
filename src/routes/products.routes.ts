import express, { Request, Response, Router } from "express"
import { ProductService } from "../services/Products/productService";
import { ProductController } from "../controller/Product/productController";

export const router: Router = express.Router();
const productService = new ProductService();
const productController = new ProductController(productService);

router.post('/product', (req: Request, res: Response) => productController.createProduct(req, res));
router.get('/products', (req: Request, res: Response) => productController.listProducts(req, res));
router.get('/products/:id', (req: Request, res: Response) => productController.findProductById(req, res));
router.put('/products/:id', (req: Request, res: Response) => productController.updateProduct(req, res));
router.delete('/products/:id', (req: Request, res: Response) => productController.deleteProduct(req, res));
router.get('/products/price-above/:price', (req: Request, res: Response) => productController.listProductsWithPriceAbove(req, res));
router.get('/products/keyword/:description', (req: Request, res: Response) => productController.listProductsByKeyword(req, res));