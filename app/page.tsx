"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; 
import { motion } from "framer-motion";
import { Inter, Kanit, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["thai"], weight: ["300", "400", "500", "600", "700"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`relative w-full min-h-screen font-sans overflow-x-hidden text-[#1d1d1f] ${inter.className}`}>
      
      {/* 1. BACKGROUND LAYER (White Clean) */}
      <div className="fixed inset-0 bg-[#FAFAFA] -z-50"></div>
      
      {/* 2. Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] -z-40"
           style={{ backgroundImage: "radial-gradient(#d4d4d8 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      {/* 3. Floating Blobs (Decoration) */}
      <div className="fixed inset-0 pointer-events-none -z-30 overflow-hidden">
          <motion.div 
             animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/40 blur-[100px] rounded-full mix-blend-multiply opacity-70"
          />
      </div>

      {/* Navbar (ถ้ามี component นี้) */}
      <div className="fixed top-0 w-full z-50">
         {/* <Navbar />  <-- Uncomment ถ้าต้องการใช้ Navbar ที่ import มา */}
      </div>

      <main className="min-h-screen flex flex-col items-center justify-center relative p-6 text-center z-10">
        
        {/* --- Profile Section --- */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 mx-auto"
        >
          {/* วงแหวนสีรุ้ง (ปรับสีให้อ่อนลงเข้ากับธีมขาว) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-amber-300 to-yellow-200 blur-md opacity-60 animate-pulse" 
               style={{ width: '190px', height: '190px', left: '-5px', top: '-5px' }}></div>
          
          {/* กรอบรูป (เปลี่ยนจากดำเป็นขาว) */}
          <div className="relative bg-white rounded-full p-1 flex items-center justify-center shadow-lg"
               style={{ width: '180px', height: '180px' }}> 
            
            <Image
              src="/profile.jpg" 
              alt="Kantapat Profile"
              width={180}
              height={180}
              style={{ 
                width: '180px', 
                height: '180px', 
                objectFit: 'cover', 
                borderRadius: '50%' 
              }}
              className="rounded-full border-4 border-white"
              priority
            />
          </div>
        </motion.div>

        {/* --- Text Content --- */}
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.2 }}
        >
          <h2 className={`text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 ${mono.className}`}>
            kantapat.dev
          </h2>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            KANTAPAT<br />
            <span className="text-orange-600">RUNGRUANGSRI</span>
          </h1>

          <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-8">
            Building digital products with <span className="text-orange-600 font-bold">brand</span> and <span className="text-orange-600 font-bold">experience</span> in mind.
          </p>

          {/* --- Social Icons (ปรับสีให้เข้มขึ้น) --- */}
          <div className="flex justify-center space-x-4 mb-10">
            {[
              { path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" },
              { path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" },
              { path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", stroke: true }
            ].map((icon, i) => (
              <a key={i} href="#" className="p-3 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-orange-600 hover:border-orange-200 hover:shadow-md transition-all hover:scale-110">
                <svg width="20" height="20" fill={icon.stroke ? "none" : "currentColor"} stroke={icon.stroke ? "currentColor" : "none"} strokeWidth={icon.stroke ? "2" : "0"} viewBox="0 0 24 24">
                  {icon.stroke ? <path strokeLinecap="round" strokeLinejoin="round" d={icon.path}></path> : <path d={icon.path}></path>}
                </svg>
              </a>
            ))}
          </div>

          {/* --- Buttons --- */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="/projects" 
              className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200 hover:-translate-y-1"
            >
              View Work 
            </Link>
            <Link 
              href="/about" 
              className="bg-white border border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-bold text-sm hover:border-orange-500 hover:text-orange-600 transition-all hover:shadow-md hover:-translate-y-1"
            >
              About Me
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
