import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import ScrollProgress from "@/components/ui/ScrollProgress";
import GridPattern from "@/components/ui/GridPattern";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Het Rank — Full Stack & AI Developer",
  description:
    "Portfolio of Het Rank, a Full Stack Developer and AI/ML Engineer building intelligent software systems, developer tools, and machine learning applications.",
  keywords: [
    "Het Rank",
    "Full Stack Developer",
    "Next.js Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "React Developer Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-white`}>
        <BackgroundGlow />
        <GridPattern />
        <ScrollProgress />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
