import ProductList from "./productList";

function HomePage({ products, searchTerm }) {

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="home-page">

      {searchTerm && (
        <p>Found {filteredProducts.length} products</p>
      )}

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}

    </div>

  );
}

export default HomePage;