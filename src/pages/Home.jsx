import { Link } from "react-router";
import { pinnedRepos, profile } from "../data/content.js";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">Portfolio</p>
          <h1>Rahul Jogadhenu</h1>
          <p className="lede">
            Hi, I'm Rahul, a 3rd year CSE student at UCLA. I really like making games! Check out what I've been working on. GitHub{" "}
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
          <h2>What I'm Currently Working On</h2>
        </div>
        <p>
            I'm currently the game director of Cloudy Critters, a roguelike deckbuilder zoobuilder game. We're currently in the early stages of development, with an expected release date of December 31st, 2026! Be on the lookout for our steam page and trailer coming in the near future, and please give us a wishlist when the time comes!
        </p>
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
