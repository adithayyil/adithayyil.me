import "../index.css";

function EditingWork() {
  return (
    <section className="mx-auto my-24 max-w-2xl flex flex-col gap-8 sm:my-36 lg:my-40">
      <h2 className="text-white text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Editing Work
      </h2>
      <div className="p-4">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/PiSc1JMnXyU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="p-4">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute w-full h-full"
            src="https://www.youtube.com/embed/oXEShdN46wQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default EditingWork;
