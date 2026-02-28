import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Amritpal Singh Kaur | Graduate Software Engineer",
  description: "Multilingual Graduate Software Engineer with enterprise experience at Bank of America, Amadeus & ENI. MSc Advanced CS at QMUL. Open to work Summer 2026.",
  keywords: ["Software Engineer", "Graduate Developer", "Bank of America", "Amadeus", "ENI", "QMUL", "London", "Full Stack", "Cloud", "Cybersecurity"],
  authors: [{ name: "Amritpal Singh Kaur" }],
  openGraph: {
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description: "Multilingual software engineer with enterprise experience in FinTech and travel tech, MSc candidate in Advanced CS.",
    type: "website",
    locale: "en_GB",
    url: "https://apsk-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritpal Singh Kaur | Graduate Software Engineer",
    description: "Multilingual Graduate Software Engineer - Open to Work Summer 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="canonical" href="https://apsk-portfolio.vercel.app" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💻</text></svg>" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amritpal Singh Kaur",
              "url": "https://apsk-portfolio.vercel.app",
              "jobTitle": "Graduate Software Engineer",
              "email": "sharysingh1144@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressCountry": "UK"
              },
              "sameAs": [
                "https://github.com/Amrit004",
                "https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
              ],
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "Queen Mary University of London",
                  "description": "MSc Advanced Computer Science"
                },
                {
                  "@type": "EducationalOrganization",
                  "name": "Staffordshire University",
                  "description": "BSc (Hons) Computer Science"
                }
              ],
              "worksFor": [
                { "@type": "Organization", "name": "Bank of America" },
                { "@type": "Organization", "name": "Amadeus" },
                { "@type": "Organization", "name": "ENI" }
              ],
              "knowsAbout": ["JavaScript", "TypeScript", "Python", "Java", "React", "Node.js", "AWS", "Cloud Security", "Cybersecurity"]
            })
          }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
