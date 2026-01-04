"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "rungruangsri.2550@gmail.com"; // 👈 เปลี่ยนเป็นอีเมลจริงของคุณตรงนี้

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl pt-20 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-center"
      >
        Let's <span className="text-gray-600">Connect</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8"
        >
          <p className="text-gray-400 text-lg leading-relaxed">
           ในส่วนนี้ยังใช้งานไม่ได้ แต่ในอนาคตผมอาจจะต่อยอดให้ใช้งานได้
          </p>

          <div className="space-y-6">
            {/* Email Card */}
            <div 
                onClick={handleCopy}
                className="group cursor-pointer p-6 border border-white/10 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all"
            >
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-white/5 rounded-full text-cyan-400 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                    </div>
                    <span className="text-sm text-gray-500 uppercase tracking-wider">Mail me</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl md:text-2xl font-mono text-white">{email}</span>
                    <button className="text-gray-500 group-hover:text-white transition-colors">
                        {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                    </button>
                </div>
            </div>

            {/* Other Info */}
            <div className="flex gap-6">
                <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="text-gray-600" /> Bangkok, Thailand
                </div>
                {/* <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="text-gray-600" /> (+66) 99-999-9999
                </div> 
                */}
            </div>
          </div>
        </motion.div>

        {/* Right: Message Form (UI Only) */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-white/5 bg-black rounded-3xl relative overflow-hidden"
        >
             {/* Background Gradient */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/20 blur-[60px] rounded-full"></div>

             <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors" placeholder="Tell me about your project..." />
                </div>

                <button className="w-full py-4 bg-white text-black font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                    Send Message <Send size={18} />
                </button>
             </form>
        </motion.div>
      </div>
    </div>
  );
}
