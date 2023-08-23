import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EditingWork from "./components/EditingWork";
import Resume from "./components/Resume";
import "./index.css";

function HomePage() {
  return (
    <div>
      <Hello />
      <About />
      <Experience />
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  );
}
export default App;
