const products = [
  { id: 1, name: "Product A", price: 1000 },
  { id: 2, name: "Product B", price: 1500 },
];

//GET ALL PRODUCT DATA
const getAllProducts = (req, res) => res.status(200).json(products);

//GET PRODUCT BY ID
const getAllProductsId = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((x) => x.id === id);

  !product
    ? res.status(404).json({ message: "Product not found" })
    : res.status(200).json(product);
};

//CREATE PRODUCT
const createProduct = (req, res) => {
  const { name, price } = req.body;

  !name ||
    (typeof price !== "number" && res.status(400).json("Input tidak valid"));

  const newProduct = {
    id: products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};

//UPDATE PRODUCT
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((x) => x.id === id);

  !product && res.status(404).json("Id not found");

  const { name, price } = req.body;
  !name ||
    (typeof price !== "number" && res.status(400).json("Input tidak valid"));

  product.name = name;
  product.price = price;
  res.status(201).json(product);
};

//DELETE PRODUCT
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.find((x) => x.id === id);
  index === -1 && res.status(404).json({ message: "Product not found" });

  products.splice(index, 1);
  res.status(204).send();
};

export {
  getAllProducts,
  getAllProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
};
