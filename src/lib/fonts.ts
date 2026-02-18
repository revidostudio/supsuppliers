import { Barlow_Condensed, Inter, Nunito_Sans, Ubuntu, Saira, Open_Sans } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// Keep legacy fonts for non-homepage pages
export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-saira",
  display: "swap",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-accent",
  display: "swap",
});
