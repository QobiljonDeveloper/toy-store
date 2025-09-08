import React from "react";
import SubHero from "./components/sub-header/SubHeader";
import SubHeader from "./components/sub-header/SubHeader";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Products from "./components/products/Products";
import { Animals, Woods } from "./static";
import Story from "./components/story/Story";
import Free from "./components/free/Free";
import Subscribe from "./components/subscribe/Subscribe";
import Instagram from "./components/instagram/Instagram";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <Category />
        <Products data={Animals} title={"Stuffed Animals"} />
        <Products data={Woods} title={"Wooden Toys"} />
        <Story />
        <Free />
        <Subscribe />
        <Instagram/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
