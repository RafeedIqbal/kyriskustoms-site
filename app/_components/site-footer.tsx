import Link from "next/link";

import { FOOTER_CONTENT } from "@/app/_content/site-content";

import styles from "./site-footer.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.brandmark}>
            KYRIS KUSTOMS
            <small>Est. MMXX · Bespoke</small>
          </div>
          <p className={styles.brandBody}>{FOOTER_CONTENT.brandBody}</p>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Collections</h2>
          <div className={styles.list}>
            {FOOTER_CONTENT.collections.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Studio</h2>
          <div className={styles.list}>
            {FOOTER_CONTENT.studio.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <h2 className={styles.columnTitle}>Contact</h2>
          <div className={styles.list}>
            {FOOTER_CONTENT.contact.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>© 2020—{year} Kyris Kustoms · All rights reserved</div>
        <div>Crafted, not launched</div>
      </div>
    </footer>
  );
}