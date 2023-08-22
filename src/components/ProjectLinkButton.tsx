import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface IconButtonProps {
  link: string;
}

function ProjectLinkButton({ link }: IconButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center mt-4">
      <FontAwesomeIcon
        icon={faGithub}
        className={`text-white text-2xl mr-2 transition-colors ${
          isHovered ? "text-purple-500" : ""
        }`}
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:text-purple-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          stroke-width="9"
          stroke="white"
          viewBox="0 0 64 64"
          className={`h-5 w-5 hover:stroke-purple-500 ${
            isHovered ? "stroke-purple-500" : ""
          }`}
        >
          <path d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32" />
          <polyline points="40.32 8.6 55.4 8.6 55.4 24.18" />
          <line x1="19.32" y1="45.72" x2="54.61" y2="8.91" />
        </svg>
      </a>
    </div>
  );
}

export default ProjectLinkButton;