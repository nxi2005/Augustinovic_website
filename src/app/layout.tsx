import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Augustinović - Kvalitetni Sustavi za Filtraciju Vode",
  description: "Profesionalna rješenja za filtraciju i omekšavanje vode. Osigurajte čistu, sigurnu i zdravu vodu za cijelu obitelj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-slate-900 bg-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
