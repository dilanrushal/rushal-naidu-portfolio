import { useEffect, useState } from "react";
import { profile } from "../data/content";

type Stats = {
  avatar: string;
  name: string;
  repos: number;
  since: string;
};

/** Static fallback so the card is never empty, even offline or rate-limited. */
const FALLBACK: Stats = {
  avatar: "https://avatars.githubusercontent.com/u/36863444?v=4",
  name: "Rushal Naidu",
  repos: 5,
  since: "2018",
};

export default function GitHubCard() {
  const [stats, setStats] = useState<Stats>(FALLBACK);

  useEffect(() => {
    const ac = new AbortController();

    fetch("https://api.github.com/users/dilanrushal", { signal: ac.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((d) => {
        setStats({
          avatar: d.avatar_url ?? FALLBACK.avatar,
          name: FALLBACK.name,
          repos: typeof d.public_repos === "number" ? d.public_repos : FALLBACK.repos,
          since: d.created_at ? String(d.created_at).slice(0, 4) : FALLBACK.since,
        });
      })
      .catch(() => {
        /* keep fallback — rate limit, offline, or aborted */
      });

    return () => ac.abort();
  }, []);

  return (
    <a
      className="gh"
      href={profile.github}
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        className="gh__avatar"
        src={stats.avatar}
        alt=""
        width={72}
        height={72}
        loading="lazy"
      />

      <div className="gh__main">
        <div className="gh__namerow">
          <span className="gh__name">{stats.name}</span>
          <span className="gh__handle">@dilanrushal</span>
        </div>
        <p className="gh__bio">
          {profile.role} · {profile.location}
        </p>
        <div className="gh__stats">
          <span>
            <strong>{stats.repos}</strong> public repos
          </span>
          <span>
            on GitHub since <strong>{stats.since}</strong>
          </span>
        </div>
      </div>

      <span className="gh__cta">
        View profile <span aria-hidden="true">↗</span>
      </span>
    </a>
  );
}
