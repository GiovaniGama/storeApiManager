##Descrição das Rotas:

POST /product: Cria um novo produto.

GET /products: Lista todos os produtos.

GET /products/:id: Obtém um produto específico por ID.

PUT /products/:id: Atualiza um produto existente por ID.

DELETE /products/:id: Remove um produto por ID.

GET /products/price-above/:price: Lista produtos com preço acima do valor fornecido.

GET /products/keyword/:description: Lista produtos com base em uma palavra-chave na descrição.

Ao criar um arquivo .env precisa colocar as variaveis de porta e url do banco mongo db, exemplo está no env.dev