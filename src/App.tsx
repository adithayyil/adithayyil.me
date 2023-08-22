import Hello from "./components/Hello";
import About from "./components/About";

import "./index.css";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="px-12 pb-24">
      <Hello />
      <About />
      <Projects />
    </main>
  );
}
export default App;
