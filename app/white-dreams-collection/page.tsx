import { CollectionPage } from "@/app/_components/collection-page";
import { COLLECTIONS } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  COLLECTIONS.white.seoTitle,
  COLLECTIONS.white.seoDescription,
);

export default function WhiteDreamsCollectionPage() {
  return <CollectionPage collection={COLLECTIONS.white} />;
}