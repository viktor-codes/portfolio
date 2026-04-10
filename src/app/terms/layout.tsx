import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-gray-900 text-white antialiased"
    >
      <Header />
      <main className="flex-1 pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
