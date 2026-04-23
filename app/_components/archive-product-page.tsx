import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/app/_components/reveal";
import { type ProductData } from "@/app/_content/site-content";

import styles from "./archive-product-page.module.css";

type ArchiveProductPageProps = {
  product: ProductData;
};

export function ArchiveProductPage({ product }: ArchiveProductPageProps) {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.images}>
          <Reveal className={styles.mainImage}>
            <Image
              src={product.images.main}
              alt={product.seoTitle}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.image}
            />
          </Reveal>

          <div className={styles.detailRow}>
            <Reveal className={styles.detailImage} delayMs={80}>
              <Image
                src={product.images.detailA}
                alt={`${product.seoTitle} detail`}
                fill
                sizes="(max-width: 900px) 100vw, 28vw"
                className={styles.image}
              />
            </Reveal>
            <Reveal className={styles.detailImage} delayMs={120}>
              <Image
                src={product.images.detailB}
                alt={`${product.seoTitle} texture detail`}
                fill
                sizes="(max-width: 900px) 100vw, 28vw"
                className={styles.image}
              />
            </Reveal>
          </div>

          <Reveal className={styles.wideImage} delayMs={160}>
            <Image
              src={product.images.wide}
              alt={`${product.seoTitle} wide view`}
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              className={styles.image}
            />
          </Reveal>
        </div>

        <div className={styles.infoColumn}>
          <div className={styles.info}>
            <p className={styles.label}>{product.label}</p>
            <h1 className={styles.title}>
              {product.title} <em>{product.emphasis}</em>
            </h1>
            <p className={styles.tagline}>{product.tagline}</p>

            <div className={styles.divider} />

            <p className={styles.description}>{product.description}</p>

            <dl className={styles.specs}>
              {product.specs.map((spec) => (
                <div key={spec.term} className={styles.specRow}>
                  <dt>{spec.term}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.swatches}>
              <p>Available tones</p>
              <div className={styles.swatchRow}>
                {product.swatches.map((swatch, index) => (
                  <div key={swatch.name} className={styles.swatchWrap}>
                    <span
                      className={[
                        styles.swatch,
                        index === 0 ? styles.swatchActive : "",
                      ].join(" ")}
                      style={{ backgroundColor: swatch.color }}
                      aria-hidden="true"
                    />
                    <small>{swatch.name}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/book-a-fitting" className={styles.primaryAction}>
                Book this direction <span aria-hidden="true">→</span>
              </Link>
              <Link href={product.collectionRoute} className={styles.secondaryAction}>
                Return to {product.collectionLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}