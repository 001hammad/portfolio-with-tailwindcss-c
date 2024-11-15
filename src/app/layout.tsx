import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "portfolio-with-tailwind-C",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=' text-white'
        style={{
          backgroundImage: 'url(background-pic.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'full',
          width: 'full',
        }}
      >
        {children}
      </body>
    </html>
  );
}
