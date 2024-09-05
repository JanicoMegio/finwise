import React, { useState, useEffect } from "react";
import Navbar from "../components/Homepage_nav.jsx";
import Hero from "../components/Homepage_hero.jsx";
import Section_1 from "../components/Homepage_section_1.jsx";
import Section_2 from "../components/Homepage_section_2.jsx";
import Price from "../components/Homepage_price.jsx";
import Footer from "../components/Homepage_footer.jsx";
import LoadingScreen from "../components/LoadingScreen.jsx";

import "../assets/styles/homepage.css";

function Homepage() {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ message: "Data loaded!" });
      setIsLoading(false);
    },1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Navbar />
      <Hero/>
      <Section_1/>
      <Section_2/>
      <Price/>
      <Footer/>
    </>
  );
}
export default Homepage;
