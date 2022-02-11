import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";

function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  const displayCat = () => {
    switch (currentCategory) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Header
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Header>
      </div>
      <div>
        <div>{displayCat()}</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;