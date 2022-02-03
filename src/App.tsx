import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import About from "./about/About";
import Slider from "./slider/Slider";
import {SliderData} from "./slider/SliderData";
import Footer from "./footer/Footer";

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
