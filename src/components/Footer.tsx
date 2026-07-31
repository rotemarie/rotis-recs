import Link from "next/link";

import type { SiteSettings } from "@/lib/types";

type FooterProps = {
  settings: SiteSettings;
};

export function Footer({ settings }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <strong>{settings.siteName}</strong>
          <p>{settings.affiliateDisclosure}</p>
        </div>
        <div className="site-footer__links">
          <Link href="/categories">Buckets</Link>
          <Link href="/links">All Links</Link>
          {settings.pinterestUrl ? <a href={settings.pinterestUrl}>Pinterest</a> : null}
          {settings.instagramUrl ? <a href={settings.instagramUrl}>Instagram</a> : null}
        </div>
      </div>
    </footer>
  );
}
