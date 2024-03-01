import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "TimeWebs",
  description: "TimeWebs official websites creators",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Footer />
      </body>
    </html>
  );
}
