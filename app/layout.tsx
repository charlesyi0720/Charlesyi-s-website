import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Yi — Economics Honours & AI",
  description:
    "Personal site of Charles Yi, Economics Honours student at the University of Melbourne and AI researcher & developer."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
