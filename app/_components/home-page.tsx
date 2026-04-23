import Image from "next/image";
import Link from "next/link";

import { HomeShowcase } from "@/app/_components/home-showcase";
import { Reveal } from "@/app/_components/reveal";
import { HOME_CONTENT } from "@/app/_content/site-content";

import styles from "./home-page.module.css";

export function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url(${HOME_CONTENT.heroImage})` }}
        />
        <div className={styles.heroMarquee} aria-hidden="true">
          <span>{HOME_CONTENT.marquee}</span>
          <span>{HOME_CONTENT.marquee}</span>
        </div>
        <p className={styles.heroTag}>{HOME_CONTENT.heroTag}</p>

        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            {HOME_CONTENT.heroLines.map((line) => (
              <span key={line.text} className={styles.heroLine}>
                {line.emphasis ? <em>{line.text}</em> : line.text}
              </span>
            ))}
          </h1>

          <div className={styles.heroSub}>
            <p className={styles.heroLabel}>{HOME_CONTENT.heroLabel}</p>
            <p>{HOME_CONTENT.heroSubcopy}</p>
          </div>
        </div>

        <div className={styles.scrollCue}>
          <span>Scroll</span>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <div>
            <p className={styles.sectionLabel}>Manifesto · 001</p>
            <p className={styles.metaCode}>KK — MF / 01</p>
          </div>

          <Reveal>
            <p className={styles.manifestoLead}>{HOME_CONTENT.manifestoLead}</p>
            <div className={styles.manifestoMeta}>
              {HOME_CONTENT.manifestoMeta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <HomeShowcase slides={HOME_CONTENT.showcaseSlides} />

      <section className={styles.editorial}>
        <div className={styles.editorialInner}>
          <div className={styles.editorialHead}>
            <Reveal>
              <h2 className={styles.editorialTitle}>
                {HOME_CONTENT.editorialHeadingPlain}{" "}
                <em>{HOME_CONTENT.editorialHeadingEmphasis}</em>
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className={styles.editorialBody}>{HOME_CONTENT.editorialBody}</p>
            </Reveal>
          </div>

          <div className={styles.editorialGrid}>
            {HOME_CONTENT.editorialTiles.map((tile, index) => (
              <Reveal
                key={tile.key}
                className={[styles.tile, styles[tile.layout]].join(" ")}
                delayMs={index * 60}
              >
                <Image
                  src={tile.image}
                  alt={tile.caption}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.tileImage}
                />
                <span className={styles.tileCaption}>{tile.caption}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processInner}>
          <Reveal>
            <h2 className={styles.processTitle}>
              {HOME_CONTENT.processHeadingPlain}{" "}
              <em>{HOME_CONTENT.processHeadingEmphasis}</em>{" "}
              {HOME_CONTENT.processHeadingSuffix}
            </h2>
          </Reveal>

          <div className={styles.processGrid}>
            {HOME_CONTENT.processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                className={styles.processStep}
                delayMs={index * 80}
              >
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span>{step.duration}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.tape} aria-hidden="true">
        <div className={styles.tapeInner}>
          <span>{HOME_CONTENT.tape}</span>
          <span>{HOME_CONTENT.tape}</span>
        </div>
      </section>

      <section className={styles.clients}>
        <div className={styles.clientsInner}>
          <div className={styles.clientsHead}>
            <Reveal>
              <h2 className={styles.clientsTitle}>
                {HOME_CONTENT.clientsHeadingPlain}{" "}
                <em>{HOME_CONTENT.clientsHeadingEmphasis}</em>.
              </h2>
            </Reveal>
            <Reveal delayMs={120}>
              <p className={styles.clientsBody}>{HOME_CONTENT.clientsBody}</p>
            </Reveal>
          </div>

          <div className={styles.clientsGrid}>
            {HOME_CONTENT.clientsPreview.map((client, index) => (
              <Reveal
                key={client.name}
                className={styles.clientCard}
                delayMs={index * 70}
              >
                <Link href="/as-seen-on" className={styles.clientLink}>
                  <div className={styles.clientMedia}>
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      sizes="(max-width: 900px) 50vw, 25vw"
                      className={styles.clientImage}
                    />
                  </div>
                  <p className={styles.clientNumber}>
                    N° {String(index + 1).padStart(3, "0")}
                  </p>
                  <div className={styles.clientCopy}>
                    <h3>{client.name}</h3>
                    <p>{client.role}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className={styles.clientsAction}>
            <Link href="/as-seen-on" className={styles.underlinedLink}>
              See the full list <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.booking}>
        <div className={styles.bookingInner}>
          <Reveal>
            <p className={styles.bookingEyebrow}>An appointment, not a purchase</p>
            <h2 className={styles.bookingTitle}>
              {HOME_CONTENT.bookingHeadingPlain}{" "}
              <em>{HOME_CONTENT.bookingHeadingEmphasis}</em>
            </h2>
            <p className={styles.bookingBody}>{HOME_CONTENT.bookingDescription}</p>
            <Link href="/book-a-fitting" className={styles.primaryLink}>
              Reserve a fitting <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal className={styles.bookingCard} delayMs={120}>
            <p className={styles.bookingCardLabel}>This week · open hours</p>
            <ul className={styles.bookingHours}>
              {HOME_CONTENT.homeHours.map((slot) => (
                <li key={slot.name}>
                  <span>{slot.name}</span>
                  <small>{slot.detail}</small>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}