import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar"; 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative p-4 text-center">
      
      {/* Navbar */}
      <Navbar />

      {/* --- Profile Section (ใหญ่ขึ้น!) --- */}
      <div className="relative mb-8 mt-10 mx-auto">
        
        {/* วงแหวนสีรุ้ง (ปรับเป็น 190px ให้ใหญ่กว่ารูปนิดนึง) */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-70 animate-pulse" 
             style={{ width: '190px', height: '190px', left: '-5px', top: '-5px' }}></div>
        
        {/* กรอบรูปสีดำ (ปรับเป็น 180px) */}
        <div className="relative bg-black rounded-full p-1 flex items-center justify-center"
             style={{ width: '180px', height: '180px' }}> 
          
          <Image
            src="/profile.jpg" 
            alt="Kantapat Profile"
            width={180}  //  แก้ค่า Width เป็น 180
            height={180} // ✅ แก้ค่า Height เป็น 180
            //  บังคับ Style ให้เป็น 180px ทั้งกว้างและสูง
            style={{ 
              width: '180px', 
              height: '180px', 
              objectFit: 'cover', 
              borderRadius: '50%' 
            }}
            className="rounded-full border-2 border-black"
            priority
          />
        </div>
      </div>

      {/* --- Text Content --- */}
      <h2 className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
        Full Stack Developer
      </h2>

      <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-tight">
        KANTAPAT<br />
        <span className="text-gray-400">RUNGRUANGSRI</span>
      </h1>

      <p className="text-gray-400 max-w-lg text-sm md:text-base leading-relaxed mb-8">
        Building digital products with <span className="text-white font-semibold">brand</span> and <span className="text-white font-semibold">experience</span> in mind.
      </p>

      {/* --- Social Icons --- */}
      <div className="flex space-x-4 mb-10">
        <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
        </a>
        <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
        </a>
        <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
      </div>

      {/* --- Buttons --- */}
      <div className="flex space-x-4">
        <Link 
          href="/projects" 
          className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-transform hover:scale-105"
        >
          View Work 
        </Link>
        <Link 
          href="/about" 
          className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-transform hover:scale-105"
        >
          About Me
        </Link>
      </div>

      {/* Glow Effect */}
      <div className="glow-effect"></div>

    </main>
  );
}
