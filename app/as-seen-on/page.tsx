import { NotablePage } from "@/app/_components/notable-page";
import { NOTABLE_PAGE_CONTENT } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  NOTABLE_PAGE_CONTENT.seoTitle,
  NOTABLE_PAGE_CONTENT.seoDescription,
);

export default function AsSeenOnPage() {
  return <NotablePage />;
}