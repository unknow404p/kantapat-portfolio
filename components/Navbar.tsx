"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/why-kmutt", label: "Why KMUTT" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center w-full px-4">
      {/* - บนมือถือ: ใช้ max-w-full และ overflow-x-auto เพื่อให้สไลด์เมนูได้ถ้าจอกว้างไม่พอ 
         - no-scrollbar: ซ่อนแถบเลื่อน
      */}
      <nav className="flex items-center gap-1 p-1.5 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl overflow-x-auto no-scrollbar max-w-full md:max-w-max">
        {menuItems.map((item) => (
          <NavItem 
            key={item.href} 
            href={item.href} 
            label={item.label} 
            active={pathname === item.href} 
          />
        ))}
      </nav>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function NavItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`
        px-4 md:px-6 py-2 rounded-full text-[12px] md:text-sm font-medium transition-all duration-300 whitespace-nowrap
        ${active 
          ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
          : "text-gray-400 hover:text-white hover:bg-white/10"
        }
      `}
    >
      {label}
    </Link>
  );
}