import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <section className="mx-auto my-16 flex flex-col justify-start gap-8 sm:my-32 sm:max-w-xl md:max-w-3xl md:justify-center lg:my-48 lg:max-w-5xl">
        <p className="flex flex-col text-[13vw] font-extrabold leading-none tracking-tight text-transparent sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-cente text-center">
            Adithya
          </span>
          <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-center sm:text-center">
            Thayyil
          </span>
        </p>
      </section>
    </div>
  );
}

export default App;
