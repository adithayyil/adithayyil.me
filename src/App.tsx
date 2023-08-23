import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/WorkExperiencesSection";
import EditingWork from "./components/EditingWork";
import Resume from "./components/Resume";

import "./index.css";
import icon from "./assets/a-icon.png";

function HomePage() {
  return (
    <div>
      <Hello />
      <About />
      <Experiences />
      <Projects />
      <EditingWork />
      <footer className="text-center text-gray-500">
        © 2023 Adithya Thayyil
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <main className="px-12 pb-24">
        <link rel="icon" type="image/svg+xml" href={icon} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
