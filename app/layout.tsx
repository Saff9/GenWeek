import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GenWeek",
  description: "A social platform to share your week beautifully!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-accent text-gray-900`}>{children}</body>
    </html>
  );
}
