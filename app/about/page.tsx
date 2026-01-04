"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const skills = [
  { title: "Web Dev", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>) },
  { title: "Frontend", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.357 1.657 1.357" /></svg>) },
  { title: "Backend", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>) },
  { title: "Algorithm", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>) },
  { title: "IoT", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>) }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  return (
    <div className={`min-h-screen w-full bg-transparent flex items-center justify-center p-6 md:p-12 relative overflow-hidden ${kanit.className}`}>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* --- Left Column: Image --- */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start lg:pl-10"
        >
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-600/30 blur-[60px] rounded-full animate-pulse -z-10"></div>
            
            <div className="relative group">
              <div className="w-[300px] h-[400px] md:w-[360px] md:h-[480px] relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-900 rotate-[-2deg] group-hover:rotate-0 transition-all duration-500">
                {/*  แก้ path ตรงนี้เป็น /images/kantapat-school.jpg */}
                <Image
                  src="/images/kantapat-school.jpg"
                  alt="Kantapat Profile"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute bottom-6 left-[-10px] bg-black/80 backdrop-blur-md border border-orange-500/50 px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg rotate-[2deg] group-hover:rotate-0 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping"></span>
                <span className="text-orange-500 text-sm font-bold tracking-wider">KMUTT</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Right Column: Content --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-left space-y-8"
        >
          <motion.div variants={fadeInUp} className="inline-block px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
            <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">ABOUT ME</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
              กันตพรรดิ์ <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">รุ่งเรืองศรี</span>
            </h1>
            <p className="text-gray-400 text-base tracking-wide font-medium">Future Computer Science Student</p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed text-base md:text-xl font-light border-l-4 border-orange-500 pl-6 py-2">
            ผมตั้งใจศึกษาต่อใน <strong className="text-white font-semibold">มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</strong> เพราะเชื่อว่าจะช่วยต่อยอดความรู้ 
            และศักยภาพในการเรียน และสร้างสรรค์เทคโนโลยีใหม่ๆ ที่ตอบโจทย์ทั้งความฝันของผมเอง 
            และเป็นประโยชน์ต่อสังคม
          </motion.p>

          <motion.div variants={fadeInUp}>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="text-orange-500">&lt;/&gt;</span> Core Competencies
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, borderColor: "rgba(249, 115, 22, 0.5)" }}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.03] border border-white/10 transition-all cursor-default group"
                >
                  <div className="text-gray-400 group-hover:text-orange-500 transition-colors mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] md:text-xs text-gray-400 font-medium group-hover:text-white">{skill.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <div className="flex space-x-3">
              {['Github', 'Facebook', 'Email'].map((social, i) => (
                 <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                 </a>
              ))}
            </div>
            <div className="h-px w-10 bg-white/20 hidden sm:block"></div>
            <Link href="/why-kmutt">
              <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-500/30 flex items-center gap-2 group cursor-pointer">
                ทำไมต้อง KMUTT 
                <span className="group-hover:translate-x-1 transition-transform"></span>
              </button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
