import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import SessionProvider from "./_components/SessionProvider";
import { ModalContextProvider } from "./_context/ModalContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MatchLance",
  description: "Matching clients with freelancers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <SessionProvider>
          <Nav />
          <ModalContextProvider>{children}</ModalContextProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
