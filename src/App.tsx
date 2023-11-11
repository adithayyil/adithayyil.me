import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/WorkExperiencesSection";
import VisualWork from "./components/VisualWork";
import VisualWorkPage from "./components/VisualWorkPage";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

import "./index.css";
import icon from "./assets/a-icon.png";
import ScrollToTop from "./components/ScrollToTop";

function HomePage() {
  return (
    <div>
      <Hello />
      <About />
      <Experiences />
      <Projects />
      <VisualWork />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <main className="px-12 pb-24">
        <link rel="icon" type="image/svg+xml" href={icon} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollToTop />
                <HomePage />
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/visual"
            element={
              <>
                <ScrollToTop />
                <VisualWorkPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
