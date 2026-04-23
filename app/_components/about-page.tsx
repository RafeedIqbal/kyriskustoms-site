import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/_components/reveal";
import { ABOUT_CONTENT } from "@/app/_content/site-content";

import styles from "./about-page.module.css";

export function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Reveal className={styles.imageWrap}>
            <Image
              src={ABOUT_CONTENT.heroImage}
              alt={ABOUT_CONTENT.label}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.image}
            />
          </Reveal>

          <Reveal className={styles.copy} delayMs={120}>
            <p className={styles.label}>{ABOUT_CONTENT.label}</p>
            <h1 className={styles.title}>
              {ABOUT_CONTENT.title} <em>{ABOUT_CONTENT.emphasis}</em>,{" "}
              {ABOUT_CONTENT.titleSuffix}
            </h1>
            <p className={styles.quote}>{ABOUT_CONTENT.quote}</p>
            <p className={styles.signature}>
              {ABOUT_CONTENT.signature}
              <small>{ABOUT_CONTENT.signatureCaption}</small>
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          {ABOUT_CONTENT.story.map((paragraph, index) => (
            <Reveal
              key={paragraph}
              className={[styles.paragraph, index === 0 ? styles.dropcap : ""].join(" ")}
              delayMs={index * 80}
            >
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className={styles.stats}>
          {ABOUT_CONTENT.stats.map((stat, index) => (
            <Reveal key={stat.label} className={styles.stat} delayMs={index * 70}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <Reveal>
          <p className={styles.ctaLabel}>Studio pace</p>
          <h2 className={styles.ctaTitle}>
            One commission at a time. One fitting at a time.
          </h2>
          <p className={styles.ctaBody}>
            The calendar stays deliberately small so the work can stay exact.
            That is the brand as much as the label on the lining.
          </p>
          <Link href="/book-a-fitting" className={styles.action}>
            Book a fitting <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}