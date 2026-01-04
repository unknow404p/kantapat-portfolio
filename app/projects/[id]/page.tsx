import { getProjectById } from '../data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; //  เพิ่ม Image import

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen text-gray-900 pt-10 relative font-sans">
      <div className="fixed inset-0 bg-white z-[-1]"></div>
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        
        <Link href="/projects" className="inline-flex items-center text-gray-400 hover:text-gray-900 transition mb-8 font-medium group">
          <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors border border-gray-100 group-hover:border-orange-100">
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </span>
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Image & Responsibilities */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-2 overflow-hidden">
               {/*  ส่วนแสดงรูปภาพใหญ่ */}
               <div className="aspect-[4/3] bg-gray-50 rounded-2xl relative flex items-center justify-center text-gray-400 font-medium overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <span>{project.title} Image</span>
                  )}
               </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                 </div>
                 <h3 className="font-bold text-gray-900 text-lg">My Responsibilities</h3>
              </div>
              <ul className="space-y-4">
                {project.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start text-gray-600 leading-relaxed text-sm md:text-base">
                    <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm shadow-orange-200">{project.category}</span>
                <span className="bg-white text-gray-600 text-xs font-medium px-4 py-1.5 rounded-full border border-gray-200 flex items-center shadow-sm">{project.year}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">{project.title}</h1>
            </div>

            {project.awards && (
              <div className="bg-white rounded-2xl p-6 border border-orange-100 shadow-[0_4px_20px_-10px_rgba(249,115,22,0.2)]">
                <h3 className="text-orange-600 font-bold mb-3 flex items-center text-sm uppercase tracking-wide">Achievements & Awards</h3>
                <div className="flex items-start gap-3 text-gray-800 font-medium leading-relaxed">
                  <svg className="w-6 h-6 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {project.awards}
                </div>
              </div>
            )}

            <div className="prose prose-lg text-gray-600 max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Detail</h3>
              <p className="leading-loose">{project.fullDescription}</p>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <div className="flex items-center gap-2 mb-5 text-gray-900 font-bold">Technology Stack</div>
               <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-5 py-2 rounded-xl bg-white border border-gray-200 text-gray-600 text-sm font-medium hover:border-orange-200 hover:text-orange-600 hover:shadow-sm transition-all cursor-default">{tech}</span>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
