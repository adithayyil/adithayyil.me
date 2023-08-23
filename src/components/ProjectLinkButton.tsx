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
        className={`text-2xl mr-2 transition-colors ${
          isHovered ? "text-purple-500" : "text-white"
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
          className={`text-white h-5 w-5 hover:stroke-purple-500 ${
            isHovered ? "stroke-purple-500" : ""
          }`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
          <path d="M11 13l9 -9"></path>
          <path d="M15 4h5v5"></path>
        </svg>
      </a>
    </div>
  );
}

export default ProjectLinkButton;
