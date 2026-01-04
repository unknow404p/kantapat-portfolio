import { getAllProjects } from "./data"; 
import Link from "next/link";
import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    // 1. CONTAINER: พื้นหลังขาวเต็มจอ 100%
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white text-black font-sans selection:bg-pink-500 selection:text-white pb-32 cursor-crosshair">
      
      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blob-crazy {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blob { animation: blob-crazy 10s infinite alternate; }
        .bg-noise {
           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute inset-0 bg-noise z-10 opacity-40"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-300/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      {/* --- 🌟 NAVBAR: แคปซูลสีดำ ลอยตรงกลาง (เหมือนหน้า Home) --- */}
      <nav className="sticky top-6 z-[60] flex justify-center mb-16">
        <div className="bg-[#1d1d1f] px-8 py-3 rounded-full flex items-center gap-8 shadow-2xl border border-white/10 transition-transform hover:scale-105">
            <Link href="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</Link>
            <Link href="/why-kmutt" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Why KMUTT</Link>
            <Link href="/projects" className="text-white text-sm font-bold border-b-2 border-orange-500 pb-0.5">Projects</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Contact</Link>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">
        
        {/* HEADER */}
        <div className="text-center mb-20 space-y-4 animate-float relative">
            <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter leading-none relative inline-block select-none">
                WORK
                <span className="absolute -top-4 -right-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-black"></span>
                <span className="absolute -bottom-2 -left-8 w-10 h-10 bg-yellow-400 border-4 border-black rotate-12"></span>
            </h1>
            <p className="font-mono text-gray-500 tracking-[0.3em] uppercase text-xs md:text-sm bg-white inline-block px-4 py-1 border border-black transform -rotate-1">
                Explore the Chaos • Crafted with Passion
            </p>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {projects.map((item) => (
                <Link 
                    href={`/projects/${item.id}`} 
                    key={item.id}
                    className="group relative block"
                >
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-black rounded-2xl translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:bg-orange-600 transition-all duration-300 ease-out"></div>
                    
                    {/* Card Content */}
                    <div className="relative h-full bg-white border-4 border-black rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 flex flex-col">
                        
                        {/* Image Section */}
                        <div className="relative h-[240px] border-b-4 border-black overflow-hidden bg-gray-100">
                            {item.image ? (
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover group-hover:scale-110 group-hover:grayscale-0 grayscale transition-all duration-500 ease-in-out"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center font-black text-2xl text-gray-200 uppercase tracking-widest">No Image</div>
                            )}
                            
                            {/* Year Badge */}
                            <div className="absolute top-3 right-3 bg-white border-2 border-black px-3 py-0.5 text-xs font-black uppercase shadow-[3px_3px_0px_#000] z-10">
                                {item.year}
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="p-6 flex-grow flex flex-col justify-between bg-white relative">
                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                            <div>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold uppercase rounded transform -rotate-1 border border-transparent group-hover:border-yellow-400 group-hover:text-yellow-400 transition-colors">
                                        {item.category}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-black text-black leading-tight mb-3 group-hover:text-orange-600 transition-colors uppercase">
                                    {item.title}
                                </h2>
                                <p className="text-gray-600 text-sm font-medium line-clamp-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            
                            <div className="mt-6 flex items-center justify-between border-t-2 border-black pt-3">
                                <span className="font-bold text-xs uppercase tracking-widest group-hover:text-orange-600 transition-colors">View Case Study</span>
                                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">➔</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </div>

      </main>

      {/* FOOTER */}
      <div className="fixed bottom-0 left-0 w-full h-4 bg-gradient-to-r from-pink-500 via-orange-500 to-blue-500 z-50 border-t-4 border-black"></div>
    </div>
  );
}