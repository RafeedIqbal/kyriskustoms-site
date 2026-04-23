import { BookingPage } from "@/app/_components/booking-page";
import { BOOKING_CONTENT } from "@/app/_content/site-content";
import { createMetadata } from "@/app/_lib/metadata";

export const metadata = createMetadata(
  BOOKING_CONTENT.seoTitle,
  BOOKING_CONTENT.seoDescription,
);

export default function BookAFittingPage() {
  return <BookingPage />;
}