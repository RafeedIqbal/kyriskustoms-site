import { ArchiveProductPage } from "@/app/_components/archive-product-page";
import { ARCHIVE_PRODUCT } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  ARCHIVE_PRODUCT.seoTitle,
  ARCHIVE_PRODUCT.seoDescription,
);

export default function TheIvoryDoubleBreastedPage() {
  return <ArchiveProductPage product={ARCHIVE_PRODUCT} />;
}