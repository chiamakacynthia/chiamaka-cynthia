import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Project from "./Component/Project";
import Footer from "./Component/Footer";
import Mood from "./Component/Mood";
import Skill from "./Component/Skill";


const App = () => {
  return (
    <div>
      {/* <Mood /> */}
      <Header />
       <Home />
     <About />
      <Services />
      <Skill/>
      <Project />
      <Footer /> 
 
    </div>
  );
};

export default App;
