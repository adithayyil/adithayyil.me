// import VideoPlayer from "./VideoPlayer";

import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function VisualWorkPage() {
  const assetUrls = {
    unlockLaunchVideo: "https://cdn.adithayyil.me/videos/unlock/launch.mp4",
    unlockBotaVideo: "https://cdn.adithayyil.me/videos/unlock/bota.mp4",
    unlockLogo: "https://cdn.adithayyil.me/images/unlock/logo-black.png",
    unlockPromotional:
      "https://cdn.adithayyil.me/images/unlock/promotional.jpg",
  };

  return (
    <main className="px-6 pt-16 pb-40 sm:pt-20 lg:pt-24">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 py-4 text-center">
        <Link
          to="/"
          className="text-white flex items-center justify-start pb-9 text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-narrow-left mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l14 0"></path>
            <path d="M5 12l4 4"></path>
            <path d="M5 12l4 -4"></path>
          </svg>
          Go to Main
        </Link>
        <h1 className="text-5xl text-white font-black tracking-tight sm:text-6xl lg:text-7xl">
          Visual Work
        </h1>
        {/* <p className="pt-9 text-lg text-gray-500 sm:text-xl lg:text-2xl">
          Take a look at my varied visual portfolio, which includes a mix of 3D
          art, motion graphics, typography, visual effects, and eclectic
          creations that blend these styles. This collection showcases
          experimental work that pushes the boundaries of traditional
          categorizations.
        </p> */}
      </div>

      <section className="mx-auto my-24 max-w-2xl">
        <div className="flex flex-col gap-8 sm:my-36 lg:my-40">
          <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Project Unlock
          </h2>
          <p className="pt-3 text-md text-white sm:text-lg lg:text-xl">
            This project represents the best of my work in{" "}
            <span className="underline underline-offset-4 decoration-green-500">
              media marketing
            </span>
            , done for Unlock, an innovative student-led company that I deeply
            valued (you can find more details in my work experience section).
            While with my skilled team, I crafted videos and graphics that
            beautifully captured our company's core values. Each piece
            symbolizes our strong dedication. However, this effort went beyond a
            typical project; it showcased our intense{" "}
            <strong className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-center text-transparent">
              passion
            </strong>{" "}
            and remarkable{" "}
            <strong className="bg-gradient-to-r from-red-300 via-magenta-200 to-red-400 bg-clip-text text-center text-transparent">
              creativity
            </strong>
            .
          </p>

          <p className="pt-1 text-md text-white sm:text-lg lg:text-xl">
            I utilized Adobe tools such as{" "}
            <strong className="text-violet-400">After Effects</strong>,{" "}
            <strong className="text-sky-500">Photoshop</strong>, and{" "}
            <strong className="text-yellow-700">Illustrator</strong> to craft
            the showcased video and graphic elements, and for the 3D design
            aspect, I turned to{" "}
            <strong className="text-orange-400">Blender</strong>.
          </p>
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 p-4 rounded-lg border border-white shadow-lg shadow-yellow-400/60">
            <h2 className="text-black text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Launch Video
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Product launch advertisement which showcased our product and
              online store
            </p>
            <VideoPlayer videoUrl={assetUrls["unlockLaunchVideo"]} />
          </div>

          <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 p-4 rounded-lg border border-white shadow-lg shadow-yellow-400/60">
            <h2 className="text-black text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Battle of the ADs Video
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Product advertisement which showcased more information about
              product
            </p>
            <VideoPlayer videoUrl={assetUrls["unlockBotaVideo"]} />
          </div>

          <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 p-4 rounded-lg border border-white shadow-lg shadow-yellow-400/60">
            <h2 className="text-black text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Logo
            </h2>
            <p className="text-sm mb-4 md:text-base">
              The official logo of Unlock fully designed by me
            </p>
            <img
              src={assetUrls["unlockLogo"]}
              className="fill-white"
              alt="Unlock Logo"
            />
          </div>

          <div className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 p-4 rounded-lg border border-white shadow-lg shadow-yellow-400/60">
            <h2 className="text-black text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Promotional Image
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Promotional graphic made for our social media platforms
            </p>
            <img
              src={assetUrls["unlockPromotional"]}
              alt="Unlock Promotional"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default VisualWorkPage;
