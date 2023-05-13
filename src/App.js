import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import BodyAdm from './components/BodyAdm';
import './components/base.css';
import BodyContactUs from './components/BodyContactUs';
import Card from './components/Card';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path = "/" element={<BodyAdm/>}/>
          <Route exact path = "/Admissions" element={<BodyAdm/>}/>
          <Route exact path = "/ContactUs" element={<BodyContactUs/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
