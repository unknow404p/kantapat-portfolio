"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Kanit, Inter } from "next/font/google";

const kanit = Kanit({ subsets: ["thai", "latin"], weight: ["300", "400", "500", "600", "700"] });
const inter = Inter({ subsets: ["latin"] });

const reasons = [
  { 
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ), 
    title: "Practical Learning", 
    desc: "ผมศรัทธาในระบบการเรียนรู้แบบลงมือทำจริง (Active Learning) ของบางมด ที่ไม่ได้สอนแค่ทฤษฎีในตำรา แต่เน้นการแก้ปัญหาจากโจทย์จริง (Problem-based Learning)" 
  },
  { 
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ), 
    title: "Innovation & Tech", 
    desc: "KMUTT คือ Hub ของนวัตกรรมระดับประเทศ สภาพแวดล้อมที่นี่เอื้อต่อการสร้างสรรค์สิ่งใหม่ๆ ซึ่งตรงกับเป้าหมายของผมที่อยากเป็น 'ผู้สร้าง' ไม่ใช่แค่ 'ผู้ใช้'" 
  },
  { 
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ), 
    title: "Strong Community", 
    desc: "วัฒนธรรมรุ่นพี่รุ่นน้องที่ช่วยเหลือกัน (Community of Practice) จะช่วยผลักดันให้ผมพัฒนาทักษะได้เร็วกว่าการเรียนรู้ด้วยตัวคนเดียว" 
  }
];

export default function WhyKMUTTPage() {
  return (
    <div className={`min-h-screen w-full relative font-sans overflow-x-hidden text-[#1d1d1f] ${kanit.className}`}>
      
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
             className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 blur-[100px] rounded-full mix-blend-multiply"
          />
          <motion.div 
             animate={{ x: [50, -50, 50], y: [50, -50, 50] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/40 blur-[100px] rounded-full mix-blend-multiply"
          />
      </div>

      {/* Navigation (Home Button) */}
      <Link href="/" className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-orange-600 hover:border-orange-200 hover:shadow-md transition-all group z-50 cursor-pointer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className={`text-sm font-bold ${inter.className}`}>Home</span>
      </Link>

      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase">My Vision & Passion</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">KMUTT?</span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
            คำถามที่ผมตอบได้อย่างมั่นใจ... <br/>
            เพราะที่นี่คือ <strong className="text-gray-800 font-medium">"สนามเด็กเล่น"</strong> ที่ดีที่สุดสำหรับนักสร้างสรรค์อย่างผม
          </p>
        </motion.div>

        {/* Reasons Grid (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {reasons.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-orange-200 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col items-start group h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100/50 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm">
                  {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed text-base flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer / Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8 }} 
          className="mt-24 flex flex-col items-center gap-4"
        >
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ready to see my work?</p>
          <Link href="/projects">
             <button className="px-10 py-4 bg-[#1d1d1f] text-white rounded-full font-bold text-lg hover:bg-orange-600 hover:px-12 transition-all duration-300 shadow-xl hover:shadow-orange-500/20 flex items-center gap-2">
                Explore Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
             </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
