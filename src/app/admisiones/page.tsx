import type { Metadata } from "next";
import ContactoPage, { metadata as contactoMetadata } from "@/app/contacto/page";

export const metadata: Metadata = {
  ...contactoMetadata,
  alternates: {
    canonical: "/contacto",
  },
};

export default function AdmisionesPage() {
  return <ContactoPage />;
}
