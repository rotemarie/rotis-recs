"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

const hasProjectId = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export default function StudioPage() {
  if (!hasProjectId) {
    return (
      <section className="site-shell studio-setup">
        <div className="studio-setup__panel">
          <p className="eyebrow">CMS</p>
          <h1>Connect Sanity</h1>
          <p>
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
            <code>NEXT_PUBLIC_SANITY_DATASET</code> to <code>.env.local</code>,
            then restart the dev server.
          </p>
        </div>
      </section>
    );
  }

  return <NextStudio config={config} />;
}
