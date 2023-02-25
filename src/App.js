import React from 'react';
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import ThemeProviderWrapper from './Components/Theme/ThemeProviderWrapper';
import './App.css';

function App() {
  return (
    <ThemeProviderWrapper>
      <Header />
      <Slider />
    </ThemeProviderWrapper>
  );
}

export default App;