import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const interFont = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light no-touch",
        interFont.className,
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
