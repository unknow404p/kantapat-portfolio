"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Inter, Kanit, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["thai"], weight: ["300", "400", "500", "600"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <div className={`w-full min-h-screen text-white flex flex-col lg:flex-row relative overflow-x-hidden ${inter.className}`}>
      
      {/* --- 1. REAL TRANSPARENT BACKGROUND & GRID --- */}
      <div className="fixed inset-0 -z-20 bg-[#080400]"></div> {/* พื้นหลังเข้มบางๆ ชั้นล่างสุด */}
      
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
         {/* แสงฟุ้งสีส้ม (ปรับให้สว่างขึ้นเพื่อให้ทะลุพื้นหลัง) */}
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600/20 blur-[120px] rounded-full"></div>
         <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full"></div>
         
         {/* เส้น Grid (ปรับสีให้เห็นชัดขึ้นบนพื้นโปร่ง) */}
         <div 
            className="absolute inset-0 opacity-[0.2]" 
            style={{ 
               backgroundImage: `linear-gradient(#331a00 1px, transparent 1px), linear-gradient(90deg, #331a00 1px, transparent 1px)`, 
               backgroundSize: '50px 50px' 
            }}
         ></div>

         {/* Vignette Overlay (ขอบมืดเพื่อให้ตรงกลางดูโปร่ง) */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080400_100%)]"></div>
      </div>

      {/* --- LEFT SIDE: Profile Photo (Small Scale) --- */}
      <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-24 relative">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-[300px] aspect-[4/5] group"
         >
            {/* Aura เรืองแสงรอบรูป */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-orange-500/40 to-amber-300/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative w-full h-full rounded-2xl border border-orange-500/30 overflow-hidden bg-black/20 backdrop-blur-md shadow-2xl">
               <Image 
                  src="/images/kantapat-school.jpg" 
                  alt="Kantapat Profile"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
               />
               {/* Scan Line สีส้มบางๆ */}
               <motion.div 
                  animate={{ top: ["-5%", "105%"] }}
                  transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                  className="absolute left-0 w-full h-[2px] bg-orange-500/30 blur-[1px] z-10"
               />
            </div>

            {/* Status Tag ลอยตัว */}
            <div className={`absolute -bottom-3 -right-3 bg-orange-600 px-3 py-1.5 rounded-lg shadow-lg z-20 ${mono.className}`}>
               <div className="text-[10px] font-bold text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                  STATUS: ONLINE
               </div>
            </div>
         </motion.div>
      </div>

      {/* --- RIGHT SIDE: Content --- */}
      <div className="lg:w-1/2 relative z-10 flex flex-col justify-center">
         <div className="px-8 py-16 md:px-16 lg:px-24 max-w-2xl bg-black/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-3xl">
            
            {/* Header Section */}
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="mb-10"
            >
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-orange-500"></div>
                  <span className={`text-xs font-bold tracking-[0.4em] text-orange-400 uppercase ${mono.className}`}>
                    System Profile
                  </span>
               </div>
               <h1 className={`text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 ${kanit.className}`}>
                  เพราะโค้ดคือ <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">การสร้างสรรค์.</span>
               </h1>
            </motion.div>

            {/* Bio Text */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className={`space-y-6 text-slate-300 text-lg leading-relaxed ${kanit.className}`}
            >
               <p>
                  สวัสดีครับ ผม <strong className="text-white">กันตพรรดิ์</strong> ผมหลงใหลในการสร้าง Digital Experience ที่สมบูรณ์แบบ ทั้งในด้านความสวยงามและประสิทธิภาพของระบบ
               </p>
               <p className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-xl text-orange-100 text-sm">
                  เชี่ยวชาญการพัฒนา <span className="text-orange-400 font-bold">Full Stack System</span> และมีความสนใจในการประยุกต์ใช้ IoT เพื่อสร้างนวัตกรรมใหม่ๆ
               </p>
            </motion.div>

            {/* --- ACTION BUTTONS --- */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
               {/* ปุ่ม Why KMUTT (ดีไซน์ส้มเด่น) */}
               <Link href="/why-kmutt" className="flex-1 group">
                  <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl transition-all shadow-[0_10px_30px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2 overflow-hidden relative">
                     <span className="relative z-10 uppercase tracking-wider text-sm">Why KMUTT?</span>
                     <motion.div 
                        animate={{ x: [-100, 200] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                     />
                  </button>
               </Link>

               {/* ปุ่ม Projects (ดีไซน์โปร่งแสง) */}
               <Link href="/projects" className="flex-1">
                  <button className="w-full py-4 bg-white/5 border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-400 font-bold rounded-xl transition-all backdrop-blur-md uppercase tracking-wider text-sm">
                     View Projects
                  </button>
               </Link>
            </div>

            {/* Terminal Style Footer */}
            <div className={`mt-16 pt-8 border-t border-white/5 flex items-center gap-4 opacity-30 ${mono.className}`}>
               <span className="text-[10px]">LOC: THAILAND</span>
               <div className="h-1 w-1 bg-slate-500 rounded-full"></div>
               <span className="text-[10px]">VER: 3.0.1_STABLE</span>
            </div>

         </div>
      </div>
    </div>
  );
}
