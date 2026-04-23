import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/_components/reveal";
import {
  NOTABLE_CLIENTS,
  NOTABLE_PAGE_CONTENT,
} from "@/app/_content/site-content";

import styles from "./notable-page.module.css";

export function NotablePage() {
  return (
    <section className={styles.page}>
      <div
        className={styles.backdrop}
        style={{ backgroundImage: `url(${NOTABLE_PAGE_CONTENT.backgroundImage})` }}
        aria-hidden="true"
      />

      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{NOTABLE_PAGE_CONTENT.label}</p>
          <h1 className={styles.title}>
            {NOTABLE_PAGE_CONTENT.title}{" "}
            <em>{NOTABLE_PAGE_CONTENT.emphasis}</em>.
          </h1>
        </Reveal>

        <Reveal className={styles.introWrap} delayMs={120}>
          <p className={styles.intro}>{NOTABLE_PAGE_CONTENT.intro}</p>
        </Reveal>

        <div className={styles.list}>
          {NOTABLE_CLIENTS.map((client, index) => (
            <Reveal
              key={client.number}
              className={styles.row}
              delayMs={index * 40}
            >
              <div className={styles.number}>{client.number}</div>
              <div className={styles.name}>{client.name}</div>
              <div className={styles.role}>{client.role}</div>
              <div className={styles.piece}>{client.piece}</div>
              <div className={styles.year}>{client.year}</div>
              <div className={styles.peek}>
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  sizes="160px"
                  className={styles.peekImage}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={220}>
          <p className={styles.outro}>{NOTABLE_PAGE_CONTENT.outro}</p>
        </Reveal>

        <div className={styles.actions}>
          <Link href="/book-a-fitting" className={styles.action}>
            Arrange a private fitting <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}