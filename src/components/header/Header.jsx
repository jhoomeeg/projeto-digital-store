import { FiSearch } from "react-icons/fi";
import Logo from "../logo/Logo";
import "./Header.css";
import { useState } from "react";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import miniCart from "../../assets/mini-cart.svg";

const NAV_ITEMS = [
  { label: "Home", to: "/", end: true },
  { label: "Produtos", to: "/produtos" },
  { label: "Categorias", to: "/categorias" },
  { label: "Meus Pedidos", to: "/pedidos" },
];

const Header = ({ cartCount = 0 }) => {
  const [params] = useSearchParams();
  const [search, setSearch] = useState(
    () => params.get("filter") || params.get("busca") || ""
  );
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/produtos?filter=${encodeURIComponent(query)}` : "/produtos");
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <form className="header-search" role="search" onSubmit={handleSearch}>
            {/* CAMPO DE BUSCA */}

            <input
              type="text"
              placeholder="Pesquisar produtos"
              aria-label="Pesquisar produtos"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="header-search-button"
              aria-label="Buscar"
            >
              <FiSearch aria-hidden="true" />
            </button>
          </form>

          {/* LOGO */}
          <Link
            to="/"
            className="header-logo"
            aria-label="Digital Store, Página Inicial"
          >
            <Logo />
          </Link>
          {/* HEADER ACTIONS */}
          <div className="header-actions">
            <Link to="/cadastro" className="header-signup">
              Cadastre-se
            </Link>

            <Link to="/login" className="header-login">
              Entrar
            </Link>

            <Link
              to="/carrinho"
              className="header-cart"
              aria-label={`Carrinho, ${cartCount} itens`}
            >
              <img src={miniCart} alt="" aria-hidden="true" />
              <span className="header-cart-badge">{cartCount}</span>
            </Link>
          </div>
        </div>

        {/* MENU DE NAVEGAÇÃO */}
        <nav className="header-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
