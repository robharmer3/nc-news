import "./App.css";
import Article from "./components/Article-Single/Article";
import Articles from "./components/Articles/AllArticles";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import NavBar from "./components/Common/NavBar";
import Home from "./components/Home-Page/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
