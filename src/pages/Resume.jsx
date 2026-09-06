import resumePdf from "/assets/SWE_Resume%20(2).pdf";

export default function Resume() {
  return (
    <div className="resume-page">
      <p className="kicker">Resume</p>
      <h1>Resume</h1>
      <div className="resume-frame">
        <iframe
          title="RJ-06 software engineering resume"
          src={resumePdf}
        />
      </div>
      <p className="resume-fallback">
        <a href={resumePdf} target="_blank" rel="noreferrer">
          Open the resume PDF in a new tab
        </a>
      </p>
    </div>
  );
}
