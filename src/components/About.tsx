import "../index.css";

function About() {
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        About Me
      </h2>

      <div className="prose prose-zinc prose-headings:scroll-mt-6 prose-a:text-blue-500 dark:prose-invert sm:prose-lg lg:prose-xl text-white text-base sm:text-lg lg:text-xl">
        <p>
          I'm an incoming 1A Mathematics student at the{" "}
          <strong className="bg-gradient-to-r from-yellow-500 to-orange-300 bg-clip-text text-center text-transparent">
            University of Waterloo
          </strong>
          , as well as an aspiring{" "}
          <strong className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-center text-transparent">
            software developer
          </strong>{" "}
          and{" "}
          <strong className="bg-gradient-to-r from-amber-700 via-orange-300 to-rose-800 bg-clip-text text-center text-transparent">
            video editor{" "}
          </strong>
          :D !
        </p>
      </div>
    </section>
  );
}

export default About;
