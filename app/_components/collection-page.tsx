import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/_components/reveal";
import {
  ARCHIVE_PRODUCT,
  COLLECTIONS,
  type CollectionData,
} from "@/app/_content/site-content";

import styles from "./collection-page.module.css";

type CollectionPageProps = {
  collection: CollectionData;
};

const COLLECTION_NAV = [
  COLLECTIONS.white,
  COLLECTIONS.grey,
  COLLECTIONS.casual,
];

export function CollectionPage({ collection }: CollectionPageProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.switcher}>
            {COLLECTION_NAV.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                className={[
                  styles.switcherLink,
                  item.route === collection.route ? styles.switcherLinkActive : "",
                ].join(" ")}
              >
                {item.seoTitle}
              </Link>
            ))}
          </div>

          <div className={styles.headline}>
            <Reveal>
              <p className={styles.label}>{collection.label}</p>
              <h1 className={styles.title}>
                {collection.title} <em>{collection.emphasis}</em>
              </h1>
            </Reveal>

            <Reveal delayMs={120}>
              <p className={styles.description}>{collection.description}</p>
            </Reveal>
          </div>

          <div className={styles.metaGrid}>
            {collection.meta.map((item, index) => (
              <Reveal
                key={item.label}
                className={styles.metaCard}
                delayMs={index * 60}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </Reveal>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href={ARCHIVE_PRODUCT.route} className={styles.primaryAction}>
              View archived commission <span aria-hidden="true">→</span>
            </Link>
            <Link href="/book-a-fitting" className={styles.secondaryAction}>
              Book a fitting
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.galleryInner}>
          <div className={styles.grid}>
            {collection.garments.map((garment, index) => (
              <Reveal
                key={garment.number}
                className={[styles.card, styles[garment.layout]].join(" ")}
                delayMs={index * 50}
              >
                <Link href={ARCHIVE_PRODUCT.route} className={styles.cardLink}>
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={garment.image}
                      alt={garment.name}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className={styles.cardImage}
                    />
                  </div>
                  <p className={styles.number}>{garment.number}</p>
                  <h2 className={styles.name}>{garment.name}</h2>
                  <p className={styles.detail}>{garment.detail}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className={styles.galleryFoot}>
            <p>
              The archive detail below follows the collection’s lead commission as a
              single, fixed product page in this handoff.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}