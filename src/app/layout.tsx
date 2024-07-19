import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/ui/layout/Header"
import { NextUIProvider } from "@nextui-org/system";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
      <NextUIProvider>
        {/* <Header/> */}
        {children}
      </NextUIProvider>
        </body>
    </html>
  );
}
