import { CollectionPage } from "@/app/_components/collection-page";
import { COLLECTIONS } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  COLLECTIONS.grey.seoTitle,
  COLLECTIONS.grey.seoDescription,
);

export default function GreySpiritCollectionPage() {
  return <CollectionPage collection={COLLECTIONS.grey} />;
}