import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ตั้งค่า Font: Outfit (สำหรับข้อความทั่วไป)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

// ตั้งค่า Font: JetBrains Mono (สำหรับตัวเลขและโค้ด)
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Minimalist Luxury Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${mono.variable}`}>
      <body className="font-sans antialiased selection:bg-purple-500/30">
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 relative overflow-hidden">
             
            {/* Grid Background Effect */}
            <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_50%_200px,#ffffff05,transparent)]"></div>
            
            {/* Floating Glow Particles (ละอองแสง) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            
            {children}
        </main>
      </body>
    </html>
  );
}
