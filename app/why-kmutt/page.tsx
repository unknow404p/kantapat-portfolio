"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["thai", "latin"], weight: ["300", "400", "600", "700"] });

const reasons = [
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ), 
    title: "Practical Learning", 
    desc: "ผมเชื่อในระบบการเรียนรู้แบบลงมือทำจริง (Active Learning) ของบางมด ที่ไม่ได้สอนแค่ทฤษฎี แต่เน้นการแก้ปัญหาและการทำโปรเจกต์" 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ), 
    title: "Innovation & Tech", 
    desc: "KMUTT เป็นผู้นำด้านเทคโนโลยีและนวัตกรรม มีสภาพแวดล้อมที่เอื้อต่อการสร้างสรรค์สิ่งใหม่ๆ และมีหลักสูตรที่ทันสมัย" 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ), 
    title: "Strong Community", 
    desc: "สังคมรุ่นพี่รุ่นน้องที่แน่นแฟ้น และวัฒนธรรมการช่วยเหลือแบ่งปันความรู้ ทำให้ผมมั่นใจว่าจะได้พัฒนาตัวเองอย่างก้าวกระโดดที่นี่" 
  }
];

export default function WhyKMUTTPage() {
  return (
    <div className={`min-h-screen w-full bg-transparent flex flex-col items-center py-20 px-6 font-sans relative ${kanit.className}`}>
      
      {/* Background Glow Effect */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>
      </div>

      <Link href="/" className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-orange-500 hover:text-black transition-all group backdrop-blur-md z-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          <span className="text-sm font-bold">Home</span>
      </Link>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 mb-4"><span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">Passion & Vision</span></div>
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">KMUTT?</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light text-pretty">ทำไมถึงต้องเป็น <strong className="text-white">บางมด</strong>? นี่คือเหตุผลหลักที่ทำให้ที่นี่คือเป้าหมายอันดับ 1 ของผม</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full z-10">
        {reasons.map((r, i) => (
          <motion.div key={i} whileHover={{ y: -10 }} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:border-orange-500/50 transition-all group relative overflow-hidden backdrop-blur-sm">
            <div className="text-4xl mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10">
                {r.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{r.title}</h3>
            <p className="text-gray-400 leading-relaxed font-light">{r.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 z-10">
        <Link href="/projects" className="flex flex-col items-center gap-2 group">
           <span className="text-gray-500 text-xs tracking-widest uppercase group-hover:text-white transition-colors">Next: See My Works</span>
           <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-orange-500 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
           </div>
        </Link>
      </motion.div>
      
      <div className="glow-effect"></div>
    </div>
  );
}
