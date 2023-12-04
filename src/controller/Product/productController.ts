import { Request, Response } from "express";
import { ProductService } from "../../services/Products/productService";

export class ProductController{
    constructor(
        private _serviceProduct: ProductService
    ){}

    async createProduct(req: Request, res: Response): Promise<void>{
        try {
            const {nameProduct, price, description} = req.body;
            const newProduct = await this._serviceProduct.createNewProduct({nameProduct, price, description})
            res.status(201).json(newProduct)
        } catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async listProducts(req: Request, res: Response): Promise<void>{
        try {
            const prosducts = await this._serviceProduct.listProducts();
            res.json(prosducts);
        } catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async findProductById(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        try {
            const product = await this._serviceProduct.findProductById(id.toString());
            if(product){
                res.json(product);
            }else{
                res.status(404).json({ message: 'Product not find.' });
            }
        } catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async updateProduct(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        const {nameProduct, price, description} = req.body;

        try {
            const updateProduct = await this._serviceProduct.updateProduct(id, {nameProduct,price,description});
            if(updateProduct){
                res.json(updateProduct);
            }else{
                res.status(404).json({ message: 'Product not find.' });
            }
        } catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async deleteProduct(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        try {
            const deleteProduct = await this._serviceProduct.deleteProduct(id);
            if(deleteProduct){
                res.json({message: 'Produto deletado com sucesso', deleteProduct});
            }
            res.status(404).json({ message: 'Product not find.' });
        } catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async listProductsWithPriceAbove(req: Request, res: Response){
        const {price} = req.params;
        try{
            const product = await this._serviceProduct.listProductsWithPriceAbove(parseFloat(price));
            res.json(product);
        }catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }

    async listProductsByKeyword(req: Request, res: Response){
        const {description} = req.params;
        console.log(req.params)
        try{
            const products = await this._serviceProduct.listProductsByKeyword(description);
            res.json(products);
        }catch (error) {
            res.status(500).json({message: (error as Error).message})
        }
    }
}