import React from 'react';
import './App.css';
import MyFooter from './components/Footer/Index';
import HeaderComponent from './components/header/Index';
import MainSection from './components/main/Index';
function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <MainSection />
      <MyFooter />
    </div>
  );
}

export default App;
