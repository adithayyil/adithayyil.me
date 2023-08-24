import { Link } from "react-router-dom";

function VisualWork() {
  return (
    <section className="mx-auto my-24 max-w-2xl flex flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Visual Work
      </h2>

      <div className="grid grid-cols-2 gap-4 text-white">
        <Link
          to="/video"
          className="bg-black p-6 rounded-lg shadow-md border border-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-2">Video Work</h3>
          {/* <p className="text-sm">Typography, 3D, Game Editing...</p> */}
        </Link>
        <Link
          to="/graphic"
          className="bg-black p-6 rounded-lg shadow-md border border-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1 flex flex-col"
        >
          <h3 className="text-xl font-semibold mb-2">Graphic Work</h3>
          {/* <p className="text-sm">Logos, Designs, Abstract stuff...</p> */}
        </Link>
      </div>
    </section>
  );
}

export default VisualWork;
