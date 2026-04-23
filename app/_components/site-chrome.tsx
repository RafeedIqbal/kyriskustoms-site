"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
  const [menuPathname, setMenuPathname] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const isMenuOpen = menuPathname === pathname;

  const handleNavigate = () => {
    setMenuPathname(null);
  };

  const handleToggleMenu = () => {
    if (isMenuOpen) {
      setMenuPathname(null);
      return;
    }

    setIsHeaderVisible(true);
    setMenuPathname(pathname);
  };

  useEffect(() => {
    const { body } = document;

    body.classList.toggle("site-nav-open", isMenuOpen);

    return () => {
      body.classList.remove("site-nav-open");
    };
  }, [isMenuOpen]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const previousScrollY = lastScrollYRef.current;
      const delta = nextScrollY - previousScrollY;

      if (isMenuOpen) {
        lastScrollYRef.current = nextScrollY;
        setIsHeaderVisible(true);
        return;
      }

      if (nextScrollY <= 24) {
        lastScrollYRef.current = nextScrollY;
        setIsHeaderVisible(true);
        return;
      }

      if (Math.abs(delta) < 12) {
        return;
      }

      lastScrollYRef.current = nextScrollY;
      setIsHeaderVisible(delta < 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={[
          styles.chromeTop,
          isHeaderVisible ? styles.chromeTopVisible : styles.chromeTopHidden,
        ].join(" ")}
      >
        <div className={styles.chromeBar}>
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

          <nav
            className={[styles.nav, styles.rightNav].join(" ")}
            aria-label="Secondary"
          >
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
            className={[
              styles.mobileToggle,
              isMenuOpen ? styles.mobileToggleOpen : "",
            ].join(" ")}
            aria-expanded={isMenuOpen}
            aria-controls="site-mobile-nav"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={handleToggleMenu}
          >
            <span className={styles.toggleBars} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
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
