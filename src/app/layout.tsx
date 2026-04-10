import type { Metadata, Viewport } from "next";
import { SkipToMainLink } from "@/components/skip-to-main-link";
import { CookieConsentRoot } from "@/components/cookie-consent/cookie-consent-root";
import { getCanonicalUrl, getMetadataBase } from "@/lib/site";
import { Calistoga, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const defaultDescription =
  "Web design and bespoke websites for Irish small businesses — fast Next.js builds, SEO fundamentals, forms and automations. Based in the Irish Midlands; clients across Ireland.";

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  title: {
    default: "Web Design & Websites in Ireland | RuraMade",
    template: "%s | RuraMade",
  },
  description: defaultDescription,
  applicationName: "RuraMade",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_IE",
    title: "RuraMade — Web design & websites for businesses in Ireland",
    description: defaultDescription,
    siteName: "RuraMade",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "RuraMade — web design and website development in Ireland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuraMade — Web design & websites in Ireland",
    description: defaultDescription,
    images: ["/og.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RuraMade",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Raster icons: reliable in Safari/iOS and other clients; SVG favicon omitted intentionally.
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48 32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111827",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IE">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white antialiased",
        )}
      >
        <CookieConsentRoot>
          <SkipToMainLink />
          {children}
        </CookieConsentRoot>
      </body>
    </html>
  );
}
