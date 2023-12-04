import { IProduct } from "../../interface/IProduct";
import { Product } from "../../models/Product";

export class ProductService{
    async createNewProduct(product: IProduct): Promise<IProduct>{
        try {
            const newProduct = new Product(product);
            const saveProduct = await newProduct.save();
            return saveProduct;
        } catch (error) {
            throw new Error(`Error to create the product: ${(error as Error).message}`);
        }
    }

    async listProducts(): Promise<IProduct[]>{
        try {
            const products = await Product.find();
            return products;
        } catch (error) {
            throw new Error(`Error to list the products: ${(error as Error).message}`);
        }
    }

    async findProductById(id: string): Promise<IProduct | null>{
        try {
            const product = await Product.findById(id);
            return product;
        } catch (error) {
            throw new Error(`Error to list the products: ${(error as Error).message}`);
        }
    }

    async updateProduct(id: string, update: Partial<IProduct>): Promise<IProduct | null>{
        try {
            const productUpdated = await Product.findByIdAndUpdate(id, update, {new: true});
            return productUpdated;
        } catch (error) {
            throw new Error(`Error to update the product: ${(error as Error).message}`);
        }
    }

    async deleteProduct(id: string): Promise<boolean>{
        try {
            const productDeleted = await Product.findByIdAndDelete(id);
            return !!productDeleted;
        } catch (error) {
            throw new Error(`Error to delete the product: ${(error as Error).message}`);
        }
    }

    async listProductsWithPriceAbove(price: number): Promise<IProduct[]>{
        try {
            const products = await Product.find({price: {$gt: price}});
            return products;
        } catch (error) {
            throw new Error(`Error to list the products with price above ${price}: ${(error as Error).message}`);
        }
    }

    async listProductsByKeyword(description: string): Promise<IProduct[]>{
        console.log(description)
        try {
            const products = await Product.find({ 
                description: { $regex: description, $options: 'i' }
            });
            return products;
        } catch (error) {
            throw new Error(`Erro to list products with a Keyword ${description}: ${(error as Error).message}`);
        }
    }
}