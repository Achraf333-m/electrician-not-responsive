import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactUs from './pages/ContactUs';



function App() {
  return (  
    <>
    <Router>
    <Nav />
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/projets' Component={Projects} />
      <Route path='/contact' Component={ContactUs} />
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
