import { Link } from "react-router";
import { pinnedRepos, profile } from "../data/content.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Portfolio</p>
          <h1>Games and software</h1>
          <p className="lede">
            Games and software. GitHub{" "}
            <a href={profile.github} target="_blank" rel="noreferrer">
              @{profile.githubHandle}
            </a>
            {" · "}
            itch.io{" "}
            <a href={profile.itch} target="_blank" rel="noreferrer">
              {profile.itchHandle}
            </a>
            .
          </p>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Pinned on GitHub</h2>
          <p>from @{profile.githubHandle}</p>
        </div>
        <div className="grid">
          {pinnedRepos.map((repo) => (
            <article className="card" key={repo.url}>
              <h3>
                <a href={repo.url} target="_blank" rel="noreferrer">
                  {repo.owner}/{repo.name}
                </a>
              </h3>
              <p className="meta">{repo.language}</p>
              <p>{repo.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="cta-row">
        <Link className="cta" to="/software">
          <strong>Software</strong>
          <span>CS35L, Verilog Breakout, and room to write.</span>
        </Link>
        <Link className="cta" to="/games">
          <strong>Game dev</strong>
          <span>itch.io embeds from lanzalot.itch.io.</span>
        </Link>
      </div>
    </>
  );
}
