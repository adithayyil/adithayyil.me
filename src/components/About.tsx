import "../index.css";

function About() {
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        About Me
      </h2>
      <div className="prose prose-zinc prose-headings:scroll-mt-6 prose-a:text-blue-500 dark:prose-invert sm:prose-lg lg:prose-xl text-white text-base sm:text-lg lg:text-xl space-y-4">
        {" "}
        <p>
          I am a 1A Honours Mathematics student at the{" "}
          <strong className="bg-gradient-to-r from-yellow-500 to-orange-300 bg-clip-text text-center text-transparent">
            University of Waterloo
          </strong>
          . In addition to my academic pursuits, I am also aspiring to develop
          my skills as a{" "}
          <strong className="bg-gradient-to-r from-purple-500 to-indigo-300 bg-clip-text text-center text-transparent">
            software developer
          </strong>{" "}
          and{" "}
          <strong className="bg-gradient-to-r from-red-300 via-magenta-200 to-red-400 bg-clip-text text-center text-transparent">
            video editor
          </strong>
          .
        </p>
        <p>
          When I'm not buried in school work, I unwind by spending quality time
          with family and friends, listening to music, getting creative with
          video editing, working on my software projects, or diving into some
          intense video game sessions!
        </p>
      </div>
    </section>
  );
}

export default About;
