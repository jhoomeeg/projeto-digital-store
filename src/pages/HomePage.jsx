import Layout from "./Layout";
import Gallery from "../components/Gallery/Gallery";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import FeaturedCollections from "../components/featuredCollections/FeaturedCollections";
import { products } from "../data/products";

const homeSlides = [1, 3, 4, 5, 6, 7, 8].map((number) => ({ src: `/home-slide-${number}.jpeg` }));

const HomePage = () => (
  <Layout>
    <Gallery images={homeSlides} width="1440" height="681" />
    <FeaturedCollections />
    <div className="container" id="produtos-em-alta">
      <Section title="Produtos em alta" titleAlign="left" link={{ text: "Ver todos", href: "/produtos" }}>
        <ProductListing products={products.slice(0, 8)} />
      </Section>
    </div>
  </Layout>
);

export default HomePage;
