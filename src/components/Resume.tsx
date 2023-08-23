import { useEffect } from "react";
import resume from "../assets/Resume_Summer_2023.pdf";

function Resume() {
  useEffect(() => {
    const iframe = document.getElementById("pdf-iframe") as HTMLIFrameElement;
    if (iframe) {
      iframe.src = resume;
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900">
      <iframe id="pdf-iframe" className="w-full h-full" title="Resume"></iframe>
    </div>
  );
}

export default Resume;
