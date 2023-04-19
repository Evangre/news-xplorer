import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header-and-footer/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/header-and-footer/Footer";
import ArticleList from "./Components/website-content/ArticleList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:category" element={<ArticleList />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
