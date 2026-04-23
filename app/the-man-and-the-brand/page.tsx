import { AboutPage } from "@/app/_components/about-page";
import { ABOUT_CONTENT } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  ABOUT_CONTENT.seoTitle,
  ABOUT_CONTENT.seoDescription,
);

export default function TheManAndTheBrandPage() {
  return <AboutPage />;
}