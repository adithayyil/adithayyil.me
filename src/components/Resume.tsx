import { useEffect } from "react";

function Resume() {
  const resume = "https://cdn.adithayyil.me/documents/Resume_2023.pdf";

  useEffect(() => {
    const iframe = document.getElementById("pdf-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = resume;
    }

    document.title = "Resume - Adithya Thayyil";
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900">
      <iframe id="pdf-iframe" className="w-full h-full" title="Resume"></iframe>
    </div>
  );
}

export default Resume;
