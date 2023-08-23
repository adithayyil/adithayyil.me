import resume from "../assets/Resume_Summer_2023.pdf";

const iframeStyle = {
  width: "100%",
  height: "100%",
};

function Resume() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <iframe src={resume} title="Resume" style={iframeStyle}></iframe>
    </div>
  );
}

export default Resume;
