import "../index.css";

function About() {
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-40 lg:my-56">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        About
      </h2>

      <div className="prose prose-zinc prose-headings:scroll-mt-6 prose-a:text-blue-500 dark:prose-invert sm:prose-lg lg:prose-xl">
        <ul className="text-white list-disc list-square">
          <li>
            <p>
              I'm an incoming 1A Mathmatics student at the{" "}
              <strong className="bg-gradient-to-r from-yellow-500 to-orange-300 bg-clip-text text-center text-transparent">
                University of Waterloo
              </strong>
              , as well as an aspiring{" "}
              <strong className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-center text-transparent">
                software developer
              </strong>{" "}
              and{" "}
              <strong className="bg-gradient-to-r  from-yellow-300 to-lime-500 bg-clip-text text-center text-transparent">
                video editor{" "}
              </strong>
              :D
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
