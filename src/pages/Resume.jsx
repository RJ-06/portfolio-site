export default function Resume() {
  return (
    <div className="resume-page">
      <p className="kicker">Resume</p>
      <h1>Resume</h1>
      <div className="resume-frame">
        <iframe
          title="RJ-06 software engineering resume"
          src="/assets/SWE_Resume%20(2).pdf"
        />
      </div>
      <p className="resume-fallback">
        <a href="/assets/SWE_Resume%20(2).pdf" target="_blank" rel="noreferrer">
          Open the resume PDF in a new tab
        </a>
      </p>
    </div>
  );
}
