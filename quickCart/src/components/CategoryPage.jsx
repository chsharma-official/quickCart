import { useParams } from "react-router-dom";
import ProductList from "./productList";

function CategoryPage({ products }) {

  const { category } = useParams();

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category.toLowerCase()
  );

  return (

    <div>

      <h2>{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}

    </div>

  );
}

export default CategoryPage;