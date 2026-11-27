import { useParams } from "react-router-dom";
import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import BuyBox from "../components/BuyBox/BuyBox";
import ProductOptions from "../components/ProductOptions/ProductOptions";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import { products } from "../data/products";
import "./ProductViewPage.css";

const productImages = [1, 2, 3, 4, 5].map((number) => ({ src: `/produc-image-${number}.jpeg` }));

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id)) || products[0];
  return (
    <Layout>
      <div className="container product-view-page">
        <div className="product-view-details">
          <Gallery images={productImages} showThumbs width="700px" height="570px" radius="4px" />
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={4.7}
            rating={90}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description="Tênis de alta performance com cabedal respirável, amortecimento macio e excelente aderência para o dia a dia."
          >
            <div className="product-option-group">
              <h3>Tamanho</h3>
              <ProductOptions options={product.sizes || ["39", "40", "41", "42", "43"]} type="text" shape="square" radius="4px" name="Tamanho" />
            </div>
            <div className="product-option-group">
              <h3>Cor</h3>
              <ProductOptions options={product.colors || ["#1F1F1F", "#C92071", "#B5B6F2"]} type="color" shape="circle" name="Cor" />
            </div>
          </BuyBox>
        </div>
        <Section title="Produtos recomendados" titleAlign="left" link={{ text: "Ver todos", href: "/produtos" }}>
          <ProductListing products={products.slice(0, 4)} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
