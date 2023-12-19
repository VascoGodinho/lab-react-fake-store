import { useState, useEffect } from "react";

function ProductListPage() {
  // The state variable `products` is currently an empty array [],
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const productsData = await response.json();
      setProducts(productsData);
    }
  };

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ProductListPage">
      <ul>
        {products.map((products) => (
          
        ))}
      </ul>
      {/* Render list of products here */}
    </div>
  );
}

export default ProductListPage;
