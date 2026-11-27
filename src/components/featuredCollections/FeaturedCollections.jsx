import { useState } from "react";
import {
  GiTShirt,
  GiTrousers,
  GiHeadphones,
  GiRunningShoe,
} from "react-icons/gi";
import { Link } from "react-router-dom";
import Section from "../Section/Section";

import "./FeaturedCollections.css";

const collections = [
  {
    id: 1,
    name: "Camisetas",
    image: "/collection-1.png",
  },
  {
    id: 2,
    name: "Calçados",
    image: "/collection-2.png",
  },
  {
    id: 3,
    name: "Headphones",
    image: "/collection-3.png",
  },
];

const categories = [
  { id: "camisetas", label: "Camisetas", icon: GiTShirt },
  { id: "calcas", label: "Calças", icon: GiTrousers },
  { id: "headphones", label: "Headphones", icon: GiHeadphones },
  { id: "tenis", label: "Tênis", icon: GiRunningShoe },
];

const FeaturedCollections = () => {
  const [activeCategory, setActiveCategory] = useState("camisetas");

  return (
    <section className="featured-collections">
      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="featured-collections-list">
            {collections.map((collection) => (
              <article
                className="collection-card"
                key={collection.id}
                style={{ backgroundImage: `url(${collection.image})` }}
              >
                <div className="collection-card-content">
                  <h3>{collection.name}</h3>
                  <Link to={`/produtos?filter=${encodeURIComponent(collection.name)}`}>Comprar</Link>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* SEGUNDA PARTE: CATEGORIAS */}
        <section className="collection-container">
          <h2>Compre por categoria</h2>

          <div className="featured-categories">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`category-button ${isActive ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(category.id);

                    document
                      .getElementById("produtos-em-alta")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  aria-label={category.label}
                  aria-pressed={isActive}
                >
                  <Icon />
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FeaturedCollections;
