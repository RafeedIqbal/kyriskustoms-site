"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { ShowcaseSlide } from "@/app/_content/site-content";

import styles from "./home-showcase.module.css";

type HomeShowcaseProps = {
  slides: ShowcaseSlide[];
};

export function HomeShowcase({ slides }: HomeShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;

    if (!node) {
      return;
    }

    const update = () => {
      const height = Math.max(node.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(
        0,
        Math.min(0.999, -node.getBoundingClientRect().top / height),
      );
      const nextIndex = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length),
      );

      setActiveIndex(nextIndex);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [slides.length]);

  return (
    <section ref={sectionRef} className={styles.showcase}>
      <div className={styles.spacer}>
        <div className={styles.track}>
          <div className={styles.imageStage}>
            {slides.map((slide, index) => (
              <div
                key={slide.key}
                className={[
                  styles.imageSlide,
                  index === activeIndex ? styles.imageSlideActive : "",
                ].join(" ")}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            ))}
          </div>

          <div className={styles.copyStage}>
            {slides.map((slide, index) => (
              <div
                key={`${slide.key}-copy`}
                className={[
                  styles.copySlide,
                  index === activeIndex ? styles.copySlideActive : "",
                ].join(" ")}
              >
                <p className={styles.index}>{slide.indexLabel}</p>
                <h2 className={styles.title}>
                  {slide.title} <em>{slide.emphasis}</em>
                </h2>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <p className={styles.body}>{slide.body}</p>
                <Link href={slide.route} className={styles.link}>
                  View the collection <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}

            <div className={styles.nav} aria-hidden="true">
              {slides.map((slide, index) => (
                <span
                  key={`${slide.key}-dot`}
                  className={[
                    styles.dot,
                    index === activeIndex ? styles.dotActive : "",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className={styles.progress}>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}