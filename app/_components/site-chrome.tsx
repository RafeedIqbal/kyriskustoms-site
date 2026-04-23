"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  getRouteLabel,
  INSTAGRAM_URL,
  NAV_LEFT,
  NAV_RIGHT,
} from "@/app/_content/site-content";

import styles from "./site-chrome.module.css";

function isActive(
  pathname: string,
  href: string,
  activePrefixes: string[] | undefined,
): boolean {
  if (pathname === href) {
    return true;
  }

  if (!activePrefixes) {
    return false;
  }

  return activePrefixes.some((prefix) => {
    if (prefix === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(prefix);
  });
}

export function SiteChrome() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.chromeTop}>
        <nav className={styles.nav} aria-label="Primary">
          {NAV_LEFT.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                styles.navLink,
                isActive(pathname, item.href, item.activePrefixes)
                  ? styles.navLinkActive
                  : "",
              ].join(" ")}
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.wordmark} onClick={handleNavigate}>
          KYRIS KUSTOMS
          <small>Est. MMXX · Bespoke</small>
        </Link>

        <nav className={[styles.nav, styles.rightNav].join(" ")} aria-label="Secondary">
          {NAV_RIGHT.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                styles.navLink,
                item.accent ? styles.navLinkAccent : "",
                isActive(pathname, item.href, item.activePrefixes)
                  ? styles.navLinkActive
                  : "",
              ].join(" ")}
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.mobileToggle}
          aria-expanded={isMenuOpen}
          aria-controls="site-mobile-nav"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={styles.toggleBars} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </header>

      <div
        id="site-mobile-nav"
        className={[
          styles.mobilePanel,
          isMenuOpen ? styles.mobilePanelOpen : "",
        ].join(" ")}
      >
        {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={handleNavigate}
          >
            {item.label}
          </Link>
        ))}
        <p className={styles.mobileMeta}>@kyriskustoms · by appointment</p>
      </div>

      <div className={styles.chromeBottom}>
        <div className={styles.crumb}>
          <span>Kyris Kustoms</span>
          <span className={styles.dot} />
          <span>{getRouteLabel(pathname)}</span>
        </div>
        <div className={styles.crumb}>
          <span>Instagram</span>
          <span className={styles.dot} />
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @kyriskustoms
          </a>
        </div>
      </div>
    </>
  );
}