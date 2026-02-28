import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amritpal Singh Kaur | Graduate Software Engineer",
  description:
    "Multilingual Graduate Software Engineer with enterprise experience at Bank of America, Amadeus & ENI. MSc Advanced CS at QMUL. Open to graduate roles in software engineering, cloud/DevOps, data, and cybersecurity.",
  metadataBase: new URL("https://apsk-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description:
      "Multilingual Graduate Software Engineer with enterprise experience at Bank of America, Amadeus & ENI. Open to Summer 2026 graduate roles.",
    url: "https://apsk-portfolio.vercel.app",
    siteName: "APSK Portfolio",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amritpal Singh Kaur – Graduate Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description:
      "Multilingual Graduate Software Engineer | Bank of America · Amadeus · ENI | MSc QMUL | Open to Summer 2026 roles",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
