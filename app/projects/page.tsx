import Link from 'next/link';
import Image from 'next/image'; // ✅ เพิ่ม Image import
import { getAllProjects } from './data';

export default async function ProjectsListPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen w-full font-sans pt-20 relative">
      <div className="fixed inset-0 bg-white z-[-1]"></div>
      <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Selected Works</h1>
            <div className="h-1.5 w-16 bg-orange-500 mt-3 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
          </div>
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-orange-500 hover:text-white transition-all group shadow-sm hover:shadow-orange-200">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
             </svg>
             <span className="text-sm font-bold">Home</span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 border border-gray-100 flex flex-col h-full group cursor-pointer hover:-translate-y-2">
              
              {/*  ส่วนแสดงรูปภาพ: ถ้ามีรูปให้โชว์รูป ถ้าไม่มีให้โชว์ข้อความ */}
              <div className="h-52 bg-gray-50 relative overflow-hidden flex items-center justify-center border-b border-gray-100 group-hover:bg-orange-50/30 transition-colors">
                 {project.image ? (
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500" 
                   />
                 ) : (
                   <div className="text-gray-400 font-medium group-hover:scale-105 transition-transform duration-500 group-hover:text-orange-500">
                      {project.title} Image
                   </div>
                 )}
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <div className="mb-3">
                  <span className="text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-2 py-1 rounded-md border border-orange-100">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1 group-hover:text-orange-600 transition-colors">{project.title}</h2>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>
                <Link href={`/projects/${project.id}`} className="inline-flex items-center text-orange-600 text-sm font-bold hover:text-orange-700 transition-colors mt-auto group/link">
                  อ่านรายละเอียด <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
