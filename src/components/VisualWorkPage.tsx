import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

function VisualWorkPage() {
  const assetUrls = {
    unlockLaunchVideo: "https://cdn.adithayyil.me/videos/unlock/launch.mp4",
    unlockBotaVideo: "https://cdn.adithayyil.me/videos/unlock/bota.mp4",
    unlockLogo: "https://cdn.adithayyil.me/images/unlock/logo-white.png",
    unlockPromotional:
      "https://cdn.adithayyil.me/images/unlock/promotional.jpg",
    sttart: "https://cdn.adithayyil.me/videos/experimental/sttart.mp4",
    connections:
      "https://cdn.adithayyil.me/images/experimental/connections.png",
    cherry: "https://cdn.adithayyil.me/videos/experimental/cherry.mp4",
    illBeWaiting:
      "https://cdn.adithayyil.me/videos/experimental/ill-be-waiting.mp4",
    tied: "https://cdn.adithayyil.me/videos/experimental/tied.mp4",
    aaa: "https://cdn.adithayyil.me/videos/experimental/aaa-release.mp4",
  };

  return (
    <main>
      <section className="mx-auto flex max-w-2xl flex-col gap-4 pb-4 pt-16 text-center">
        <Link
          to="/"
          className="text-white flex items-center justify-start pb-9 text-base"
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
        <p className="pt-9 text-base text-white sm:text-lg lg:text-xl">
          Explore my visual portfolio, a playground of{" "}
          <strong className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            experimentation
          </strong>
          . Uncover a mix of 3D art, motion graphics, typography, and visual
          effects. Get ready for some creative fun! 🎨
        </p>
      </section>

      <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-36 lg:my-40">
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
          beautifully captured our company's core values. Each piece symbolizes
          our strong dedication. However, this effort went beyond a typical
          project; it showcased our intense{" "}
          <strong className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text text-center text-transparent">
            passion
          </strong>{" "}
          and remarkable{" "}
          <strong className="bg-gradient-to-r from-red-300 via-magenta-200 to-red-400 bg-clip-text text-center text-transparent">
            creativity
          </strong>
          . 🔓
        </p>

        <p className="pt-1 text-md text-white sm:text-lg lg:text-xl">
          I utilized Adobe tools such as{" "}
          <strong className="text-violet-400">After Effects</strong>,{" "}
          <strong className="text-sky-500">Photoshop</strong>, and{" "}
          <strong className="text-yellow-700">Illustrator</strong> to craft the
          showcased video and graphic elements, and for the 3D design aspect, I
          turned to <strong className="text-orange-400">Blender</strong>.
        </p>

        <div className="text-white grid grid-cols-1 gap-9 pt-2">
          <div className=" p-4 rounded-lg border border-yellow-300 shadow-lg shadow-yellow-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Launch Video
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Product launch advertisement which showcased our product and
              online store
            </p>
            <VideoPlayer videoUrl={assetUrls["unlockLaunchVideo"]} />
          </div>

          <div className=" p-4 rounded-lg border border-yellow-300 shadow-lg shadow-yellow-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Battle of the ADs Video
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Product advertisement which showcased more information about our
              product
            </p>
            <VideoPlayer videoUrl={assetUrls["unlockBotaVideo"]} />
          </div>

          <div className=" p-4 rounded-lg border border-yellow-300 shadow-lg shadow-yellow-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
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

          <div className=" p-4 rounded-lg border border-yellow-300 shadow-lg shadow-yellow-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              Unlock Promotional Image
            </h2>
            <p className="text-sm mb-4 md:text-base">
              One of the promotional graphic made for our social media platforms
            </p>
            <img
              src={assetUrls["unlockPromotional"]}
              alt="Unlock Promotional"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto my-24 flex max-w-2xl flex-col gap-8 sm:my-36 lg:my-40">
        <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          Experimental + Other
        </h2>
        <p className="pt-3 text-md text-white sm:text-lg lg:text-xl">
          Check out some of the favorite experimental projects I've been working
          on over the last 2-3 years! I couldn't include everything because,
          well, I've got a mountain of scrapped stuff 😆. But you know what they
          say, trying out different things you love, even if they're not the
          usual, is the ultimate way to{" "}
          <strong className="text-pink-500">master any kind of editing</strong>.
          Also, Just to give you a heads up, the majority of these gems are
          actually Call of Duty edits, and I personally recorded each one using
          virtual cinematic cameras or extracting the game models for 3D. This
          compilation truly captures my journey of pushing boundaries and
          breaking away from the norm. It's been quite the adventure! 👨‍🔬🚀
        </p>

        <div className="grid grid-cols-1 gap-9 pt-2 text-white">
          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              "Sttart"
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Unoffical visualizer for musical artist Kiryano's song "Sttart"
            </p>

            <VideoPlayer videoUrl={assetUrls["sttart"]} />

            <p className="text-sm mt-4 md:text-base">
              Created with{" "}
              <strong className="text-violet-400">After Effects</strong> and{" "}
              <strong className="text-green-400">TouchDesigner</strong>
            </p>
          </div>

          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              "Cherry"
            </h2>
            <p className="text-sm mb-4 md:text-base">
              An 3D cinematic edit created using extracted models from Call of
              Duty 4{" "}
            </p>

            <VideoPlayer videoUrl={assetUrls["cherry"]} />

            <p className="text-sm mt-4 md:text-base">
              Created with{" "}
              <strong className="text-violet-400">After Effects</strong> and{" "}
              <strong className="text-orange-400">Blender</strong>
            </p>
          </div>

          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              "I'll be waiting"
            </h2>
            <p className="text-sm mb-4 md:text-base">
              A cinematic Call of Duty: Black Ops II edit with an emphasis on
              lighting, color correction, compositing, and motion
              interpolation/time remap
            </p>

            <VideoPlayer videoUrl={assetUrls["illBeWaiting"]} />

            <p className="text-sm mt-4 md:text-base">
              Created with{" "}
              <strong className="text-violet-400">After Effects</strong>
            </p>
          </div>

          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">"Tied"</h2>
            <p className="text-sm mb-4 md:text-base">
              A cinematic Call of Duty: Black Ops II edit with elements of
              visual storytelling with emphasis on motion interpolation/time
              remap & visual atmospherics
            </p>

            <VideoPlayer videoUrl={assetUrls["tied"]} />

            <p className="text-sm mt-4 md:text-base">
              Created with{" "}
              <strong className="text-violet-400">After Effects</strong>
            </p>
          </div>

          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              "Connexions Humaines"
            </h2>
            <p className="text-sm mb-4 md:text-base">
              Art piece which was part of my project "Tied"
            </p>

            <img src={assetUrls["connections"]} alt="Connections" />

            <p className="text-sm mt-4 md:text-base">
              Created with <strong className="text-orange-400">Blender</strong>
            </p>
          </div>

          <div className=" p-4 rounded-lg border border-red-400 shadow-lg shadow-red-400/60">
            <h2 className=" text-2xl font-semibold mb-2 md:text-3xl">
              "AAA Release"
            </h2>
            <p className="text-sm mb-4 md:text-base">
              A cinematic Call of Duty: Black Ops II edit with an emphasis on
              motion interpolation/time remap & visual atmospherics
            </p>

            <VideoPlayer videoUrl={assetUrls["aaa"]} />

            <p className="text-sm mt-4 md:text-base">
              Created with{" "}
              <strong className="text-violet-400">After Effects</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default VisualWorkPage;
