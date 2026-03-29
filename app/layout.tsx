import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naphattra Portfolio",
  description:
    "Portfolio of Naphattra Phruksaphanrat, digital engineering student in technology, data and product systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
