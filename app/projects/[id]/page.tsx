import { getProjectById } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    // 1. CONTAINER
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white text-[#1d1d1f] font-sans selection:bg-black selection:text-white pb-40
      bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] 
      bg-[size:32px_32px]"
    >
      
      {/* --- CSS Animations --- */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes move-blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.2); }
          66% { transform: translate(-30px, 40px) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-blob { animation: move-blob 10s infinite alternate; }
        .delay-2000 { animation-delay: 2s; }
        .delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* --- 🌟 LIGHTBOX LOGIC (CSS ONLY) --- */}
      {/* Checkbox นี้ทำหน้าที่เป็นสวิตช์เปิด-ปิดรูปใหญ่ */}
      <input type="checkbox" id="lightbox-toggle" className="peer hidden" />

      {/* MODAL: จะแสดงเมื่อ Checkbox ถูกติ๊ก */}
      <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl hidden peer-checked:flex items-center justify-center transition-all duration-500 opacity-0 peer-checked:opacity-100">
         {/* ปุ่มปิด (คลิกพื้นหลังเพื่อปิด) */}
         <label htmlFor="lightbox-toggle" className="absolute inset-0 cursor-zoom-out"></label>
         
         {/* รูปใหญ่เต็มตา */}
         <div className="relative w-[95vw] h-[90vh] pointer-events-none transform scale-95 peer-checked:scale-100 transition-transform duration-500">
            {project.image && (
               <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  priority
               />
            )}
         </div>

         {/* คำแนะนำปุ่มปิด */}
         <div className="absolute top-8 right-8 text-white/50 font-mono text-xs tracking-widest pointer-events-none">
            CLICK ANYWHERE TO CLOSE
         </div>
      </div>


      {/* --- DYNAMIC BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob"></div>
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob delay-2000"></div>
         <div className="absolute bottom-0 left-20 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob delay-4000"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-black/5 mb-12">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link 
            href="/projects" 
            className="group relative px-8 py-3 rounded-full bg-white border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-black"
          >
            <div className="absolute inset-0 w-full h-full bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center gap-3 group-hover:text-white transition-colors">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7 7-7" /></svg>
               <span className="font-bold text-sm tracking-widest">BACK TO PROJECTS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3 bg-white/50 px-4 py-2 rounded-full border border-black/5">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">Live Preview Mode</span>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12 pt-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
           
           {/* LEFT COLUMN (Visuals) */}
           <div className="lg:col-span-7 space-y-24">
              
              {/* SUPER IMAGE CARD (เปลี่ยนเป็น Label เพื่อให้คลิกเปิด Lightbox ได้) */}
              <label htmlFor="lightbox-toggle" className="cursor-zoom-in block relative group perspective-1000 my-8">
                 <div className="absolute -top-12 -left-12 w-32 h-32 border-t-4 border-l-4 border-black/10 rounded-tl-[3rem] z-0"></div>
                 <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b-4 border-r-4 border-orange-500/20 rounded-br-[3rem] z-0"></div>
                 
                 <div className="relative w-full aspect-video md:aspect-[16/10] bg-white rounded-[2.5rem] border-2 border-black overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,0.05)] 
                                 transition-all duration-500 transform 
                                 group-hover:translate-x-[-8px] group-hover:translate-y-[-8px] group-hover:shadow-[25px_25px_0px_0px_#f97316]">
                    
                    {project.image ? (
                       <Image 
                         src={project.image} 
                         alt={project.title} 
                         fill 
                         className="object-contain p-10 lg:p-14 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                         priority
                       />
                    ) : (
                       <div className="w-full h-full flex items-center justify-center font-black text-4xl text-gray-100 uppercase italic">
                          No Visual
                       </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                       <span className="bg-white px-8 py-3 rounded-full font-bold text-black border-2 border-black shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 tracking-widest">
                          CLICK TO EXPAND
                       </span>
                    </div>
                 </div>
              </label>

              {/* MISSION CARDS */}
              <div className="relative pt-10">
                 <h2 className="text-[10rem] leading-none font-black text-gray-100 absolute -top-32 -left-20 -z-10 select-none opacity-60">TASKS</h2>
                 <h3 className="text-3xl font-black text-black mb-12 flex items-center gap-4 pl-4 border-l-8 border-orange-500">
                    MISSION OBJECTIVES
                 </h3>
                 
                 <div className="grid gap-8">
                   {project.responsibilities.map((res, i) => (
                     <div key={i} className="group relative p-8 bg-white border-2 border-gray-100 rounded-3xl hover:border-black transition-all duration-300 hover:shadow-[12px_12px_0px_#000] hover:-translate-y-2">
                        <div className="flex gap-8 items-start">
                           <span className="text-6xl font-black text-gray-100 group-hover:text-orange-500 transition-colors leading-none">0{i+1}</span>
                           <p className="text-gray-700 text-xl font-medium leading-loose pt-2 group-hover:text-black">{res}</p>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>

           </div>

           {/* RIGHT COLUMN (Info) */}
           <div className="lg:col-span-5 space-y-16">
              <div className="lg:sticky lg:top-36 animate-float">
                 
                 {/* Title Section */}
                 <div className="space-y-6 mb-12">
                    <div className="flex flex-wrap gap-3">
                       <span className="px-4 py-2 bg-black text-white text-sm font-mono font-bold uppercase rounded-lg shadow-md transform -rotate-2">
                          {project.category}
                       </span>
                       <span className="px-4 py-2 bg-white border-2 border-black text-black text-sm font-mono font-bold rounded-lg shadow-md transform rotate-2">
                          {project.year}
                       </span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter drop-shadow-sm uppercase">
                       {project.title}
                    </h1>
                 </div>

                 {/* Description Box */}
                 <div className="relative p-10 bg-white/90 backdrop-blur-md border border-gray-200 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-shadow">
                    <div className="absolute -top-5 -right-5 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-4xl shadow-xl">❝</div>
                    <p className="text-gray-600 text-xl leading-loose font-medium text-pretty whitespace-pre-line">
                       {project.fullDescription}
                    </p>
                 </div>

                 {/* Tech Stack */}
                 <div className="space-y-6 pt-6">
                    <h3 className="font-mono text-sm font-bold text-gray-400 uppercase tracking-[0.2em] border-b-2 border-gray-100 pb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-4">
                       {project.stack.map((t, i) => (
                          <span key={i} className="px-6 py-3 bg-gray-50 rounded-2xl text-sm font-bold text-gray-600 border border-transparent hover:bg-white hover:border-black hover:text-black hover:shadow-[6px_6px_0px_#f97316] hover:-translate-y-1 transition-all cursor-crosshair">
                             {t}
                          </span>
                       ))}
                    </div>
                 </div>

                 {/* Awards */}
                 {project.awards && (
                    <div className="mt-8 p-1.5 rounded-3xl bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 shadow-xl transform rotate-1 hover:rotate-0 transition-transform">
                       <div className="bg-white p-6 rounded-[1.3rem] flex items-center gap-5">
                          <span className="text-5xl filter drop-shadow-md animate-bounce">🏆</span>
                          <div>
                             <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-1">WINNER AWARD</h3>
                             <p className="font-bold text-gray-900 text-lg leading-tight">{project.awards.replace('🏆', '').replace('🥇', '').trim()}</p>
                          </div>
                       </div>
                    </div>
                 )}

                 {/* Contact Button */}
                 <Link href="/contact" className="group block w-full relative h-20 mt-12">
                    <div className="absolute inset-0 bg-black rounded-3xl translate-y-3 translate-x-3 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-orange-600 rounded-3xl flex items-center justify-center border-4 border-black group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                       <span className="font-black text-white text-2xl tracking-[0.2em] flex items-center gap-4">
                          CONTACT ME 
                          <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                       </span>
                    </div>
                 </Link>

              </div>
           </div>

        </div>
      </main>
    </div>
  );
}