import "../index.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "PlantPro",
      description:
        "Previously a Hackathon project written in Vanilla JS, and currently working on V2!",
      skills: ["React", "Tailwind CSS", "MongoDB", "Digital Ocean", "Docker"],
    },
    {
      title: "SoundCloud Notify",
      description:
        "A Discord bot that keeps users updated about new track uploads from their favorite artists on SoundCloud",
      skills: ["Python", "Discord.py", "SQLite", "Digital Ocean", "Docker"],
      githubLink: "https://github.com/adithayyil/sc-notify",
    },
    {
      title: "bsdl",
      description:
        "A CLI tool for downloading BeatStars music with ID3 metadata tagging",
      skills: ["Python", "ID3", "Music Metadata"],
      githubLink: "https://github.com/adithayyil/bsdl",
    },
    {
      title: "NAS + VPN Server",
      description:
        "A NAS Server with a combined VPN Server for secure remote encrypted access to stored data",
      skills: [
        "TrueNAS",
        "SMB",
        "VPN",
        "Computer Networking",
        "Computer Hardware",
      ],
    },
    {
      title: "AIO",
      description:
        "Temperature, Light Intensity, and Wind Intensity reader with live web graph and logging",
      skills: ["Arduino", "ESP8266", "Async Web Server", "Soldering"],
      githubLink: "https://github.com/adithayyil/AIO",
    },
    {
      title: "led",
      description:
        "A RGB strip controller made with the use of a Arduino Nano with light detection functionalities and more",
      skills: ["Arduino Nano", "Soldering"],
      githubLink: "https://github.com/adithayyil/led",
    },
  ];
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-32 lg:my-36">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
