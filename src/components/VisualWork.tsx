import { Link } from "react-router-dom";

function VisualWork() {
  return (
    <section className="mx-auto my-24 max-w-2xl flex flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Visual Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <Link
          to="/video"
          className="bg-gradient-to-r from-red-300 via-magenta-200 to-red-400 p-6 rounded-lg shadow-lg shadow-red-400/60 hover:shadow-rose-200/30 border border-white transition duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-center">Video Work</h3>
          <p className="text-center text-sm">
            Captivating visual storytelling through videos
          </p>
        </Link>
        <Link
          to="/graphic"
          className="bg-gradient-to-r from-red-300 via-magenta-200 to-red-400 p-6 rounded-lg shadow-lg shadow-red-400/60 hover:shadow-rose-200/30 border border-white transition duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center"
        >
          <h3 className="text-xl font-semibold mb-2 text-center">
            Graphic Work
          </h3>
          <p className="text-center text-sm">
            Crafting abstract and artistic graphic designs
          </p>
        </Link>
      </div>
    </section>
  );
}

export default VisualWork;
