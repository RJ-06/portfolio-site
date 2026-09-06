import { NavLink, Outlet } from "react-router";
import { nav, profile } from "../data/content.js";

export default function Layout() {
  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <img src={profile.avatar} alt="RJ-06 GitHub profile" />
        </NavLink>
        <nav className="nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>{profile.githubHandle} · {profile.itchHandle}</span>
        <span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {" · "}
          <a href={profile.itch} target="_blank" rel="noreferrer">
            itch.io
          </a>
        </span>
      </footer>
  </div>
  );
}
