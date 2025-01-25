import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Nunito } from "next/font/google";
import Header from "./_components/Header";
export const metadata: Metadata = {
  title: "AI story generator for kids",
  description: "Kid stories",
};
const Font = Nunito({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Font.className}>
        <Provider>
          {" "}
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
