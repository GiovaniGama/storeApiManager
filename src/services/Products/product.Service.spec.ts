const ProductService = require("./productService");

describe("Create User in ProductService", () => {
    it("should be able to create a new product", async () => {
        const productService = new ProductService();

        const productData = {
            nameProduct: "testProduct",
            price: 20,
            description: "teste of product"
        };

        const product = await productService.createNewProduct(productData)

        console.log(product)
    })
})