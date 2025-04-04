import "./App.css";
import Article from "./components/Article-Single/Article";
import Articles from "./components/Articles/AllArticles";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import NavBar from "./components/Common/NavBar";
import { UserProvider } from "./components/context/User";
import Home from "./components/Home-Page/Home";

import { Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Error from "./components/Common/Error";

function App() {
  return (
    <>
      <UserProvider>
        <header>
          <Header />
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/users" element={<User />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </UserProvider>
    </>
  );
}

export default App;
