import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell section">
      <p className="eyebrow">Not Found</p>
      <h1 className="page-title">That edit is not here.</h1>
      <p className="page-copy">
        The link may have moved, or the article may still be in draft.
      </p>
      <div className="home-hero__actions">
        <Link className="button" href="/articles">
          Browse Articles
        </Link>
        <Link className="button button--secondary" href="/links">
          Browse Links
        </Link>
      </div>
    </section>
  );
}
