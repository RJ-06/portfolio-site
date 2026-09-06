import { profile } from "../data/content.js";
import photoOfMe from "/assets/picture_of_me.jpg";

export default function About() {
  return (
    <>
      <h1>About me</h1>

      <div className="placeholder-stack" style={{ marginTop: "2rem" }}>
        <div className="placeholder photo-slot">
          <img src={photoOfMe} alt="Rahul" />
        </div>
        <div className="placeholder">
          <div className="label">Intro</div>
          <p>
            Hi, I'm Rahul! I'm a Computer Science and Engineering student at UCLA, interested in game development and embedded systems! I do a lot of game development in my free time, and am currently working on my first commercial game, Cloudy Critters, which will be released at the end of 2026! Be on the lookout for a trailer and steam page soon.
          </p>
        </div>
        <div className="placeholder">
          <div className="label">Education / work</div>
          <p>I'm a 3rd year Computer Science and Engineering student at UCLA, and have been particularly interested in embedded systems, lower level programming, and game development related topics. For the summer of 2026, I interned at Werfen, a medical device company, where I worked on developing testing software for their products.</p>
        </div>
        <div className="placeholder">
          <div className="label">Interests</div>
          <p>Outside of Computer Science, I'm really interested in reading, art, and more (add me on goodreads!). I've also gotten really into rock climbing in the past year, and love doing anything active! I really love playing quizbowl, and have competed in it since middle school. I've also written for several Quizbowl sets, including 2025 SCYLLA which I head edited.</p>
        </div>
        <div className="placeholder">
          <div className="label">Links</div>
          <p className="links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.itch} target="_blank" rel="noreferrer">
              itch.io
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.goodreads} target="_blank" rel="noreferrer">
              Goodreads
            </a>
            <a href="mailto:Rahulj0506@gmail.com" target="_blank" rel="noreferrer">
              email: Rahulj0506@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
