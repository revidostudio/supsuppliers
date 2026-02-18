import type { Metadata } from "next";
import { nunitoSans, ubuntu, saira, openSans } from "@/lib/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://supsuppliers.com"),
  title: {
    default: "Supsuppliers | Uw Partner in Supplements & Private Label",
    template: "%s | Supsuppliers",
  },
  description:
    "Supsuppliers is de Nederlandse leverancier van poedervormige voeding en voedingssupplementen. White label & private label, lage afname, FSSC22000 gecertificeerd.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    alternateLocale: "en_US",
    siteName: "Supsuppliers",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Supsuppliers",
      url: "https://supsuppliers.com",
      logo: "https://supsuppliers.com/logo.png",
      description:
        "Nederlandse leverancier van poedervormige voeding en voedingssupplementen. White label & private label.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Geograaf 3",
        addressLocality: "Duiven",
        postalCode: "6921 EW",
        addressCountry: "NL",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+31634568191",
        contactType: "sales",
        availableLanguage: ["Dutch", "English"],
      },
    },
    {
      "@type": "WebSite",
      url: "https://supsuppliers.com",
      name: "Supsuppliers",
      inLanguage: ["nl", "en"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${nunitoSans.variable} ${ubuntu.variable} ${saira.variable} ${openSans.variable}`}
    >
      <body className="font-body text-text-body bg-surface-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
