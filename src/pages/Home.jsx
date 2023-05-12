
import About from '../components/About';
import Contact from '../components/Contact';
import Landing from '../components/Landing';
import Offers from '../components/Offers';
import React, { useState, useRef } from 'react';



function Home() {
  const [isVisible, setContact] = useState(false)

  function visibleContact() {
    if (!isVisible) {
      setContact(true)
    }
    else {
      setContact(false)
    }
  }


  
  return (
    <>
    <Landing contact={visibleContact} isVisible={isVisible} />
    <Contact isVisible={isVisible} setContact={setContact} />
    <Offers />
    <About />
    </>
  )
}

export default Home