import "../index.css";
import workExperiences from "./WorkExperiences";

function Experiences() {
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-32 lg:my-36">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Work Experience
      </h2>
      <div>
        <ol className="relative border-l border-gray-700">
          {workExperiences.map((experience, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-stone-950 bg-gradient-to-r from-purple-500 to-indigo-500">
                {experience.icon}
              </span>
              <h3 className="text-lg font-semibold text-white">
                {experience.title}
              </h3>
              <h3 className="mb-1 text-sm text-white italic">
                {experience.company}
              </h3>
              <time className="block mb-3 text-sm font-normal leading-none text-gray-500">
                {experience.duration}
              </time>
              <ul className="mb-4 px-5 text-base font-normal text-gray-400 list-disc list-square">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experiences;
