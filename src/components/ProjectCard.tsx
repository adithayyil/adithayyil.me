import ProjectLinkButton from "./ProjectLinkButton";
import TechTablets from "./ProjectTechTablets";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  githubLink?: string;
  isWorkInProgress?: boolean;
}

function ProjectCard({
  title,
  description,
  skills,
  githubLink,
  isWorkInProgress = false,
}: ProjectCardProps) {
  return (
    <div className="w-full p-4">
      <div className="p-6 bg-gradient-to-b from-purple-900 to-purple-600 border border-white rounded-lg shadow-lg shadow-purple-600/60">
        <div className="flex items-center">
          <h3 className="text-white text-lg font-semibold mb-2">
            {title}
            {isWorkInProgress && (
              <span className="bg-yellow-500 text-black py-1 px-2 rounded-full text-xs ml-2">
                Work in Progress
              </span>
            )}
          </h3>
        </div>
        <p className="text-white">{description}</p>
        <TechTablets skills={skills} />
        {githubLink && <ProjectLinkButton link={githubLink} />}
      </div>
    </div>
  );
}

export default ProjectCard;
