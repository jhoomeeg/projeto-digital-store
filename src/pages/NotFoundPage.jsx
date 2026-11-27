import { Link } from "react-router-dom";
import Layout from "./Layout";
import "./NotFoundPage.css";

const NotFoundPage = () => (
  <Layout>
    <div className="container not-found-page">
      <p>Erro 404</p>
      <h1>Página não encontrada</h1>
      <Link to="/">Voltar para a página inicial</Link>
    </div>
  </Layout>
);

export default NotFoundPage;
