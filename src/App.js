import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home/Home";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AboutUs from "./aboutUs/AbountUs";
import ErrorPage from "./errorPage/ErrorPage";
import WhereToBuy from "./whereToBuy/WhereToBuy";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/where-to-buy" element={<WhereToBuy />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
