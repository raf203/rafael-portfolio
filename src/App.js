import React from 'react';
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";


function App() {
  return (
    <div>
      <Header></Header>
      <About />
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}
export default App;