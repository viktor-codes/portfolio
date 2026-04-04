import type { Metadata, Viewport } from "next";
import { CookieConsentRoot } from "@/components/cookie-consent/cookie-consent-root";
import { Calistoga, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  // Production primary domain on Vercel (not preview deployment host)
  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) {
    return new URL(`https://${productionHost}`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "RuraMade | High-Performance Websites & Integrations",
  description:
    "Bespoke websites for small businesses built to ship in 10 days. High-speed, SEO-optimized, and built with Next.js. Based in Irish Midlands.",
  applicationName: "RuraMade Portfolio",
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "RuraMade | Websites & Integrations built to ship",
    description:
      "I build websites for small businesses that need to look professional and start getting enquiries — fast.",
    siteName: "RuraMade",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "RuraMade - Professional Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RuraMade | High-Performance Websites",
    description: "Websites for small businesses built to ship in 10 days.",
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
    <html lang="en">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 font-sans text-white antialiased",
        )}
      >
        <CookieConsentRoot>{children}</CookieConsentRoot>
      </body>
    </html>
  );
}
