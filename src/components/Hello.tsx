import "../index.css";
import memoji from "../assets/memoji.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope as faEnvelopeSolid,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

function Hello() {
  return (
    <section className="mx-auto my-16 flex flex-col justify-center items-center sm:my-32 sm:max-w-xl md:max-w-3xl md:flex-row md:justify-center lg:my-48 lg:max-w-5xl">
      <div className="md:ml-3 relative">
        <img
          src={memoji}
          alt="Adi's Memoji"
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-black mix-blend-multiply"></div>
      </div>
      <div className="flex flex-col text-center md:text-left md:mr-8 md:mb-0">
        <p className="text-1xl font-extrabold leading-none tracking-tight text-transparent sm:text-1xl md:text-2xl lg:text-3xl">
          <span className="text-white bg-clip-text">Hello, I am</span>
        </p>
        <p className="text-6xl font-extrabold leading-none tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-purple-500 to-red-400 bg-clip-text pb-1 overflow-hidden inline-block max-w-full">
            Adithya
          </span>{" "}
        </p>
        <p className="text-1xl font-extrabold leading-none tracking-tight text-transparent sm:text-1xl md:text-2xl lg:text-3xl">
          <span className="text-white bg-clip-text">👋</span>
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="src/assets/Resume_Summer_2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group">
              <FontAwesomeIcon
                icon={faFilePdf}
                className="text-white text-2xl hover:text-green-500 icon"
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bg-black text-white text-xs py-1 px-2 rounded-md transform -translate-x-1/2 top-full left-1/2 transition-opacity duration-200">
                Resume
              </div>
            </div>
          </a>
          <a href="mailto:athayyil@uwaterloo.ca">
            <div className="relative group">
              <FontAwesomeIcon
                icon={faEnvelopeSolid}
                className="text-white text-2xl hover:text-red-500 icon"
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bg-black text-white text-xs py-1 px-2 rounded-md transform -translate-x-1/2 top-full left-1/2 transition-opacity duration-200">
                Email
              </div>
            </div>
          </a>
          <a
            href="https://www.instagram.com/a333di"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-2xl hover:text-orange-500 icon"
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bg-black text-white text-xs py-1 px-2 rounded-md transform -translate-x-1/2 top-full left-1/2 transition-opacity duration-200">
                Instagram
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/adithayyil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-2xl hover:text-blue-500 icon"
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bg-black text-white text-xs py-1 px-2 rounded-md transform -translate-x-1/2 top-full left-1/2 transition-opacity duration-200">
                LinkedIn
              </div>
            </div>
          </a>
          <a
            href="https://github.com/adithayyil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative group">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white text-2xl hover:text-purple-500 icon"
              />
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute bg-black text-white text-xs py-1 px-2 rounded-md transform -translate-x-1/2 top-full left-1/2 transition-opacity duration-200">
                GitHub
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hello;
