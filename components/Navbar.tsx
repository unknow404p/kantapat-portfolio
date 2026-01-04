// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full">
      {/* กรอบ Navbar ทรงแคปซูล (Pill shape) */}
      <nav className="flex items-center gap-1 px-2 py-2 bg-[#111]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20">
        
        {/* รายการเมนู */}
        <NavItem href="/" label="Home" />
        <NavItem href="/about" label="About" />
        <NavItem href="/why-kmutt" label="Why KMUTT"  /> 
        <NavItem href="/projects" label="Projects" />
        <NavItem href="/contact" label="Contact" />
      </nav>
    </div>
  );
}

// Component ย่อยสำหรับปุ่มแต่ละอัน (เพื่อให้แก้ Style ง่ายๆ ทีเดียว)
function NavItem({ href, label, active = false }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`
        px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
        ${active 
          ? "bg-white text-black font-semibold hover:bg-gray-200" // สไตล์ปุ่มเด่น (Why KMUTT)
          : "text-gray-400 hover:text-white hover:bg-white/5"     // สไตล์ปุ่มปกติ
        }
      `}
    >
      {label}
    </Link>
  );
}