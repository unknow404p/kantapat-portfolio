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
    <div className={`relative w-full min-h-screen text-[#1d1d1f] font-sans overflow-x-hidden ${inter.className}`}>
      
      {/* 1. BACKGROUND LAYER (สีขาว) */}
      <div className="fixed inset-0 bg-[#FAFAFA] -z-50"></div>
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] -z-40"
           style={{ backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-12 lg:gap-20 relative z-10">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="lg:w-5/12 relative flex justify-center">
           <motion.div 
             animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
             className="absolute inset-0 bg-orange-400/20 blur-[60px] rounded-full scale-110 -z-10"
           />
           <motion.div 
             animate={{ y: [-10, 10, -10] }} 
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-[280px] md:w-[350px] aspect-[3/4]"
           >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white rotate-[-3deg] hover:rotate-0 transition-all duration-500 cursor-pointer group bg-white">
                 <Image src="/images/kantapat-school.jpg" alt="Profile" fill className="object-cover object-top" priority />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
                 <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className={`text-sm font-bold ${mono.className}`}>KANTAPAT.DEV</p>
                 </div>
              </div>

              {/* ป้ายลอย: Current Goal */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-8 top-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
              >
                 <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-xl"></div>
                 <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Current Goal</div>
                    {/* ตรงนี้คือจุดที่แก้ข้อความ */}
                    <div className="text-sm font-bold text-gray-800">satri Student</div>
                 </div>
              </motion.div>

              {/* ป้ายลอย: Full Stack */}
              <motion.div 
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -left-6 bottom-10 bg-[#1d1d1f] text-white py-2 px-4 rounded-xl shadow-xl flex items-center gap-2"
              >
                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                 <span className={`text-xs font-mono font-bold`}>Full Stack Ready</span>
              </motion.div>
           </motion.div>
        </div>

        {/* RIGHT SIDE: CONTENT */}
        <div className="lg:w-7/12 flex flex-col justify-center text-center lg:text-left">
           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
             <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">About Me</span>
             <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
               KANTAPAT <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">RUNGRUANGSRI</span>
             </h1>
             <div className={`space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed ${kanit.className}`}>
               <p>สวัสดีครับ ผมชื่อ <strong>กันตพรรดิ์</strong> (Kantapat) ผมมีความสนใจด้านวิทยาการคอมพิวเตอร์และเทคโนโลยีดิจิทัล โดยเฉพาะการนำความรู้ด้านการเขียนโปรแกรมและการคิดเชิงวิเคราะห์มาประยุกต์ใช้ในการแก้ปัญหาอย่างเป็นระบบ ผมมีความมุ่งมั่นในการพัฒนาทักษะด้านการออกแบบระบบ การเขียนโค้ด และการทำงานเป็นทีม ผ่านการเรียนรู้ด้วยตนเองและการทำโครงการที่เกี่ยวข้องกับเทคโนโลยี</p>
               <p>ผมมีความฝันที่จะนำทักษะ <span className="text-orange-600 font-medium">Full Stack Development</span> ไปต่อยอดที่ <strong>KMUTT</strong> เพื่อสร้างนวัตกรรมที่แก้ปัญหาได้จริงในโลกยุคดิจิทัล</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-10 pt-8 border-t border-gray-200">
                <div><h3 className="text-3xl font-bold text-gray-900">3</h3><p className="text-sm text-gray-500 uppercase mt-1">Years Coding</p></div>
                <div><h3 className="text-3xl font-bold text-gray-900">10</h3><p className="text-sm text-gray-500 uppercase mt-1">Projects</p></div>
                <div><h3 className="text-3xl font-bold text-orange-500">100%</h3><p className="text-sm text-gray-500 uppercase mt-1">Passion</p></div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <Link href="/projects"><button className="px-8 py-4 bg-[#1d1d1f] text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg">View My Projects</button></Link>
               <Link href="/why-kmutt"><button className="px-8 py-4 bg-white border border-gray-200 text-gray-800 font-bold rounded-xl hover:border-orange-500 hover:text-orange-600 hover:shadow-lg transition-all">Why KMUTT?</button></Link>
             </div>
           </motion.div>
        </div>

      </div>
    </div>
  );
}
