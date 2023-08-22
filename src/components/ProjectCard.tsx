import ProjectLinkButton from "./ProjectLinkButton";
import TechTablets from "./ProjectTechTablets";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
}

function ProjectCard({
  title,
  description,
  skills,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="w-full p-1">
      <div className="bg-stone-950 border border-white rounded-lg shadow-md p-6">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <TechTablets skills={skills} />
        {githubLink && <ProjectLinkButton link={githubLink} />}
      </div>
    </div>
  );
}

export default ProjectCard;
