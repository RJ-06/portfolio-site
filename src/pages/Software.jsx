import { softwareProjects } from "../data/content.js";

export default function Software() {
  return (
    <>
      <p className="kicker">Software</p>
      <h1>Software portfolio</h1>
      <p className="lede">
        Course and hardware projects from GitHub.
      </p>

      <div className="software-list" style={{ marginTop: "2rem" }}>
        {softwareProjects.map((project) => (
          <article className="project" key={project.repo}>
            <div>
              <h2>{project.title}</h2>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
            <div className="links">
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {(project.extraLinks ?? []).map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}

        <section className="Other Experience">
          <h3>Other Experience</h3>
          <p>
            This past summer (2025), I interned at Werfen, a biotech company which works on in vitro medical devices. I got to work on the Gem Hemochron 100 team, where I developed a Python and bash based internal DevOps package which uses a device-side fuzzing based approach to
test embedded medical-device software across multiple products. I also worked on CI/CD automation using Jenkins, to automate the creation of build documentation.
            I also teach UCLA's Engineering 1: Game Development course, where I help students learn the basics of programming and game development in C# and Unity, and have instructed nearly 60 students. 
          </p>
        </section>
      </div>
    </>
  );
}
