import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCategories, getSiteSettings } from "@/lib/content";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: settings.siteName,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.intro,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, categories] = await Promise.all([getSiteSettings(), getCategories()]);

  return (
    <html lang="en">
      <body>
        <Header siteName={settings.siteName} categories={categories} />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}
