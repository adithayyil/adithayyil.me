import "../index.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "PlantPro",
      description:
        "All-in-one web app for searching a wide array of plant species, setting up planting reminders, and accessing expert care tips, transforming you into a plant care pro in no time",
      skills: [
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "MongoDB",
        "Digital Ocean",
        "Docker",
      ],
      isWorkInProgress: true,
    },
    {
      title: "SoundCloud Notify",
      description:
        "A Discord bot that delivers real-time updates on new track uploads from your favorite artists on SoundCloud and forget about your FOMO",
      skills: [
        "Python",
        "Discord.py",
        "Beautiful Soup",
        "SQLite",
        "Digital Ocean",
        "Docker",
      ],
      githubLink: "https://github.com/adithayyil/sc-notify",
    },
    {
      title: "bsdl",
      description:
        "A streamlined CLI tool for downloading your beloved beats from BeatStars, complete with automatic ID3 metadata tagging – your shortcut to a well-organized music collection",
      skills: ["Python", "ID3", "Music Metadata"],
      githubLink: "https://github.com/adithayyil/bsdl",
    },
    {
      title: "NAS + VPN Server",
      description:
        "A NAS Server with an integrated VPN Server, which has a fortified layer of security for remote access to stored data through encrypted connections",
      skills: [
        "TrueNAS",
        "SMB",
        "VPN",
        "Computer Networking",
        "Computer Hardware",
      ],
    },
    {
      title: "weather",
      description:
        "Effortlessly monitor Temperature, Light Intensity, and Wind Intensity, visualizing data through a live web graph and ensuring precise logging for accurate records",
      skills: ["Arduino", "ESP8266", "Async Web Server", "Soldering"],
      githubLink: "https://github.com/adithayyil/weather",
    },
    {
      title: "led",
      description:
        "A RGB strip controller featuring adaptable light control, integrated light detection, and practical functions that let you experiment with different colors for a personalized lighting ambiance",
      skills: ["Arduino Nano", "Soldering"],
      githubLink: "https://github.com/adithayyil/led",
    },
  ];
  return (
    <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Tech Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 pt-2">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
