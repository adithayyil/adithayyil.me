import Hello from "./components/Hello";
import About from "./components/About";

import "./index.css";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import EditingWork from "./components/EditingWork";

function App() {
  return (
    <main className="px-12 pb-24">
      <Hello />
      <About />
      <Experience />
      <Projects />
      <EditingWork />
      <footer className="text-center text-gray-500">
        © 2023 Adithya Thayyil
      </footer>
    </main>
  );
}
export default App;
