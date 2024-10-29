import React from "react";
import Header from "../../components/homepage/header";
import About from "../../components/homepage/about";
import Skill from "../../components/homepage/skill";
import Footer from "../../components/homepage/footer";
import Contact from "../../components/homepage/contact";
import ScrollToTop from "../../components/goTop/scrolltotop";
const Home = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <About />
      <Skill /> 
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
