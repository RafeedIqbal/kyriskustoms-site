import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter_Tight,
  JetBrains_Mono,
} from "next/font/google";
import type { ReactNode } from "react";

import { SiteChrome } from "@/app/_components/site-chrome";
import { SiteFooter } from "@/app/_components/site-footer";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/app/_content/site-content";

import "./globals.css";

const displaySerif = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const textSans = Inter_Tight({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const detailMono = JetBrains_Mono({
  variable: "--font-detail",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displaySerif.variable} ${textSans.variable} ${detailMono.variable}`}
    >
      <body>
        <SiteChrome />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}