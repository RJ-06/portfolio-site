export default function Resume() {
  const resumeUrl = new URL(
    `assets/${encodeURIComponent('SWE_Resume (2).pdf')}`,
    `${window.location.origin}${import.meta.env.BASE_URL}`
  ).toString();

  return (
    <div className="resume-page">
      <p className="kicker">Resume</p>
      <h1>Resume</h1>
      <div className="resume-frame">
        <iframe
          title="RJ-06 software engineering resume"
          src={resumeUrl}
          type="application/pdf"
        />
      </div>
      <p className="resume-fallback">
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          Open the resume PDF in a new tab
        </a>
      </p>
    </div>
  );
}
