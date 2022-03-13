import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import About from "./about/About";
import Footer from "./footer/Footer";
import Slider from "./slider/Slider";
import {SliderData} from "./slider/SliderData";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main />
        <Skills/>
        <About/>
      <Slider slides={SliderData}/>
        <Footer/>
    </div>
  );
}

export default App;
