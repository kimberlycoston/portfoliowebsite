import { useState } from 'react'
import './App.css'
import ParticlesComponent from './components/particles.jsx'
import Nav from './components/nav/nav.jsx'
import Hero from './components/hero/hero.jsx'
import About from './components/about/about.jsx'
// import Carousel from './components/carousel/carousel.jsx'



function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      {/* Particles Background */}
      <ParticlesComponent id="particles" />

      {/* Add Nav component */}
      <Nav /> 

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Carousel Section */}
      {/* <Carousel /> */}



      </div>
  );
  }

export default App;
