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
    <div className="h-full flex flex-col">
      <div className="flex-grow p-6 bg-gradient-to-b from-purple-900 to-purple-600 border border-white rounded-lg shadow-lg shadow-purple-600/60 flex flex-col justify-between">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">
            {title}
            {isWorkInProgress && (
              <div>
                {" "}
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-yellow-300 border border-yellow-300">
                  Work in Progress
                </span>
              </div>
            )}
          </h3>
          <p className="text-white">{description}</p>
          <TechTablets skills={skills} />
        </div>
        {githubLink && (
          <div className="mt-auto">
            <ProjectLinkButton link={githubLink} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
