import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesComponent from "./components/particles.jsx";
import Nav from "./components/shared/nav/nav.jsx";
import Footer from "./components/shared/footer/footer.jsx";
import Hero from "./components/homepage/hero/hero.jsx";
import About from "./components/about/about.jsx";
// import Connectdots from "./components/homepage/connectdots/connectdots.jsx";
import Carousel from "./components/shared/carousel/carousel.tsx";
import PortfolioPage from "./components/portfolio/portfoliopage.jsx"; // Portfolio page
import PortfolioHeader from "./components/portfolio/portfolioheader";
import ECG_Rhythm_Interpretation from './components/pages/ECG_Rhythm_Interpretation.jsx'; // Import the ECG case study page
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Particles Background */}
        <ParticlesComponent id="particles" />

        {/* Navigation Bar */}
        <Nav />

        {/* Footer
        <Footer /> */}

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Carousel />
                {/* <Connectdots /> */}
              </>
            }
          />

          {/* About Route */}
          <Route path="/about" element={<About />} />

          {/* Portfolio Route - Only PortfolioPage here, it includes the header */}
          <Route
            path="/portfolio"
            element={
              <>
                <PortfolioHeader />
                <PortfolioPage />
              </>
            }
          />

          {/* ECG Rhythm Interpretation Case Study Route */}
          <Route
            path="/ecg-rhythm-interpretation"
            element={<ECG_Rhythm_Interpretation />}
          />
        </Routes>

        <Analytics /> {/* Add this at the bottom */}
      </div>
    </Router>
  );
}

export default App;