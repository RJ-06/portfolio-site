import ItchEmbed from "../components/ItchEmbed.jsx";
import { itchGames, profile } from "../data/content.js";

export default function Games() {
  return (
    <>
      <p className="kicker">Game development</p>
      <h1>Game portfolio</h1>
      <p className="lede">
        Selected work from{" "}
        <a href={profile.itch} target="_blank" rel="noreferrer">
          {profile.itchHandle}.itch.io
        </a>
      </p>

      <div className="game-list" style={{ marginTop: "2rem" }}>
        {itchGames.map((game) => (
          <article className="game" key={game.embedId}>
            <ItchEmbed
              id={game.embedId}
              image={game.image}
              title={game.title}
              url={game.url}
              extraLinks={game.extraLinks}
            />
            <div>
              <h2>{game.title}</h2>
              <p className="meta">{game.role}</p>
              <p>{game.description}</p>
              <p className="links" style={{ marginTop: "0.85rem" }}>
                {game.url && (
                  <a href={game.url} target="_blank" rel="noreferrer">
                    Open on itch.io
                  </a>
                )}
                {(game.extraLinks ?? []).map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
