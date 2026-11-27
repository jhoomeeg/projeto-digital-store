import ProductCard from "../ProductCard/ProductCard";
import "./ProductListing.css";

const ProductListing = ({ products = [] }) => (
  <div className="product-listing">
    {products.map((product, index) => (
      <ProductCard key={product.id || `${product.name}-${index}`} {...product} />
    ))}
  </div>
);

export default ProductListing;
