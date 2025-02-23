import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesComponent from "./components/particles.jsx";
import Nav from "./components/shared/nav/nav.jsx";
import Hero from "./components/homepage/hero/hero.jsx";
import About from "./components/homepage/about/about.jsx";
import Connectdots from "./components/homepage/connectdots/connectdots.jsx";
import Carousel from "./components/shared/carousel/carousel.tsx";
import PortfolioPage from "./components/projectpage/projectpage.tsx"; // Import the PortfolioPage

function App() {
  return (
    <Router>
      <div className="App">
        {/* Particles Background */}
        <ParticlesComponent id="particles" />

        {/* Add Nav component */}
        <Nav />

        <Routes>
          {/* Define routes for different pages */}
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <About />

                {/* Carousel Section */}
                <Carousel />

                {/* Connectdots Section */}
                <Connectdots />
              </>
            }
          />
          {/* Add route for the portfolio page */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
