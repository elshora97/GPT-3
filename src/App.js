import React from "react";
import {
  Blogs,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
