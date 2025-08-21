import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import { auth } from "./_lib/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" className="light">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Nav user={session?.user} />
        <main>{children}</main>
      </body>
    </html>
  );
}
