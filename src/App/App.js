import React from "react"
// Components
import Header from "../Header/Header"
import Work from "../Work/Work"
import About from "../About/About"
import Skills from "../Skills/Skills"
import Footer from "../Footer/Footer"
import "../styles/mains.scss"
import Navbar from "../Navbar/Navbar"

function App() {
  return (
  <div className="root">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
  </div>
  );
}

export default App;
