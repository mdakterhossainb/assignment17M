import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  // Page load হলে Welcome Message দেখানোর জন্য useEffect
  useEffect(() => {
    setShowWelcome(true);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Welcome Banner */}
        {showWelcome && (
          <div className="bg-indigo-900 text-white px-4 py-2.5 text-sm flex justify-between items-center">
            <span className="mx-auto font-medium">
              👋 Welcome to TechNova! Explore our React & Tailwind CSS website.
            </span>
            <button
              onClick={() => setShowWelcome(false)}
              className="text-indigo-200 hover:text-white font-bold ml-4"
            >
              ✕
            </button>
          </div>
        )}

        {/* Header */}
        <Header />

        {/* Main Content (5 Pages) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
