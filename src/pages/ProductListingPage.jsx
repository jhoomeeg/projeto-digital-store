import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "./Layout";
import Section from "../components/Section/Section";
import ProductListing from "../components/ProductListing/ProductListing";
import FilterGroup from "../components/FilterGroup/FilterGroup";
import { products } from "../data/products";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  const [params] = useSearchParams();
  const [sort, setSort] = useState("");
  const [brands, setBrands] = useState([]);
  const [genders, setGenders] = useState([]);
  const filter = (params.get("filter") || params.get("busca") || "").trim().toLowerCase();

  const toggle = (setter, value, checked) =>
    setter((current) => checked ? [...current, value] : current.filter((item) => item !== value));

  const result = useMemo(() => {
    let items = products.filter((product) =>
      (!filter || `${product.name} ${product.category} ${product.brand}`.toLowerCase().includes(filter)) &&
      (!brands.length || brands.includes(product.brand)) &&
      (!genders.length || genders.includes(product.gender))
    );
    items = [...items].sort((a, b) => {
      const priceA = a.priceDiscount ?? a.price;
      const priceB = b.priceDiscount ?? b.price;
      if (sort === "lowest") return priceA - priceB;
      if (sort === "highest") return priceB - priceA;
      return 0;
    });
    return items;
  }, [filter, brands, genders, sort]);

  return (
    <Layout>
      <div className="container product-listing-page">
        <aside className="product-filters">
          <label className="sort-field">
            <span>Ordenar por</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </label>
          <div className="filter-panel">
            <h2>Filtrar por</h2>
            <FilterGroup title="Marca" options={[
              { text: "Adidas", value: "Adidas" }, { text: "Nike", value: "Nike" },
              { text: "Puma", value: "Puma" }, { text: "K-Swiss", value: "K-Swiss" },
            ]} value={brands} onChange={(value, checked) => toggle(setBrands, value, checked)} />
            <FilterGroup title="Gênero" inputType="checkbox" options={[
              { text: "Masculino", value: "Masculino" }, { text: "Feminino", value: "Feminino" },
              { text: "Unissex", value: "Unissex" },
            ]} value={genders} onChange={(value, checked) => toggle(setGenders, value, checked)} />
          </div>
        </aside>
        <div className="product-results">
          <Section title={`${result.length} produto${result.length === 1 ? "" : "s"} encontrado${result.length === 1 ? "" : "s"}`} titleAlign="left">
            {result.length ? (
              <ProductListing products={result} />
            ) : (
              <div className="product-empty-state">
                Nenhum produto encontrado para os filtros selecionados.
              </div>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
