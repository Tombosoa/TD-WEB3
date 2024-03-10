import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      
      <body className={inter.className}>
        <header>
          <div className="text-center text-8xl">HEADER</div>
        </header>
          {children}
        <footer>
          <div className="text-center text-8xl">FOOTER</div>
        </footer>
      </body>
     
    </html>
  );
}