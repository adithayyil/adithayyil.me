import "../index.css";

function Hello() {
  return (
    <section className="mx-auto my-16 flex flex-col justify-center items-center sm:my-32 sm:max-w-xl md:max-w-3xl md:flex-row md:justify-center lg:my-48 lg:max-w-5xl">
      <div className="flex flex-col text-center md:text-left md:mr-8 md:mb-0">
        <p className="text-2xl font-extrabold leading-none tracking-tight text-transparent sm:text-1xl md:text-1xl lg:text-2xl">
          <span className="text-white bg-clip-text">Hello, I am</span>
        </p>
        <p className="text-6xl font-extrabold leading-none tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text pb-1 overflow-hidden inline-block max-w-full">
            Adithya
          </span>{" "}
        </p>
        <p className="text-2xl font-extrabold leading-none tracking-tight text-transparent sm:text-1xl md:text-1xl lg:text-2xl">
          <span className="text-white bg-clip-text">👋</span>
        </p>
      </div>
      <div className="md:ml-3 relative">
        <img
          src="src/assets/memoji.png"
          alt="Adi's Memoji"
          className="max-w-full md:max-w-sm sm:max-w-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-black mix-blend-multiply"></div>
      </div>
    </section>
  );
}

export default Hello;
