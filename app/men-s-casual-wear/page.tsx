import { CollectionPage } from "@/app/_components/collection-page";
import { COLLECTIONS } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  COLLECTIONS.casual.seoTitle,
  COLLECTIONS.casual.seoDescription,
);

export default function MensCasualWearPage() {
  return <CollectionPage collection={COLLECTIONS.casual} />;
}