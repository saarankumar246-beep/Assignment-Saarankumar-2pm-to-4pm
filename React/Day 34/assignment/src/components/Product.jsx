import React, { useState } from "react";

function Product() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apple", price: 50 },
    { id: 2, name: "Banana", price: 20 },
    { id: 3, name: "Orange", price: 30 }
  ]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (name.trim() === "" || price.trim() === "") return;

    setProducts([
      ...products,
      { id: Date.now(), name, price: parseFloat(price) }
    ]);

    setName("");
    setPrice("");
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="app">
      <h1>Product List</h1>

      <div className="input-container">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="number"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span> ₹{product.price}</span>
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
