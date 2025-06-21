import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

{/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */}

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Hirusha Kularathna Portfolio Website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
