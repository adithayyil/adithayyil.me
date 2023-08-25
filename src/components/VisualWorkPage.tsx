// import VideoPlayer from "./VideoPlayer";

function VisualWorkPage() {
  return (
    <main className="px-6 pt-16 pb-40 sm:pt-20 lg:pt-24">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 py-4 text-center">
        <h1 className="text-4xl text-white font-black tracking-tight sm:text-5xl lg:text-6xl">
          Visual Work
        </h1>
        <p className="text-white">Work in Progress...</p>
        {/* <p className="text-lg text-stone-600 sm:text-xl lg:text-2xl">
          I'm heavily into 3D editing and motion graphics. But what really
          excites me is jumping into experimental projects, where I can let
          loose and explore. That's where I think I learn and improve the most!
        </p> 
        <p className="pt-3 text-lg text-gray-500 sm:text-xl lg:text-2xl">
          Take a look at my varied visual portfolio, which includes a mix of 3D
          art, motion graphics, typography, visual effects, and eclectic
          creations that blend these styles. This collection showcases
          experimental work that pushes the boundaries of traditional
          categorizations.
        </p> */}
      </div>

      {/* <section className="mx-auto my-24 max-w-2xl">
        <div className="flex flex-col gap-8 sm:my-36 lg:my-40">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Unlock Launch Video</h2>
            <p className="text-sm text-gray-500 mb-4">
              Product launch app made for Unlock
            </p>
            <VideoPlayer videoUrl={unlocklaunch} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Unlock Battle-of-the-ADs Video
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Battle-of-the-ADs competition submission
            </p>
            <VideoPlayer videoUrl={unlockbota} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Unlock Logo</h2>
            <p className="text-sm text-gray-500 mb-4">
              The official logo of Unlock.
            </p>
            <img src={unlocklogo} className="fill-white" alt="Unlock Logo" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Unlock Promotional Image
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              A promotional image for Unlock.
            </p>
            <img src={unlockpromotional} alt="Unlock Promotional" />
          </div>
        </div> 
      </section> */}
    </main>
  );
}

export default VisualWorkPage;
