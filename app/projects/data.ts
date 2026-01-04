export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  fullDescription: string;
  responsibilities: string[];
  awards?: string;
  stack: string[];
}

export const projects: Project[] = [
  { 
    id: '1', 
    title: 'Motion Quest', 
    category: 'GAME',
    year: '2025',
    image: '/images/nsc.png',
    description: 'เกมที่ผู้เล่นควบคุมตัวละครด้วยการเคลื่อนไหวร่างกายจริง ผ่านเทคโนโลยี Motion Detection',
    fullDescription: 'Motion Quest เป็นเกมแนวตะลุยด่านพิชิตภารกิจที่ผู้เล่นควบคุมตัวละครด้วยการเคลื่อนไหวร่างกายจริง ผ่านเทคโนโลยี Motion Detection และกล้องเว็บแคม โดยพัฒนาด้วย Unity ร่วมกับ MediaPipe AI ที่สามารถตรวจจับจุดสำคัญของร่างกาย 33 จุด เพื่อวิเคราะห์ท่าทางและถ่ายทอดสู่โมเดลในเกมแบบเรียลไทม์',
    responsibilities: [
      'สมาชิกหลักในทีมพัฒนาโค้ด',
      'เชื่อมต่อ MediaPipe AI เข้ากับ Unity Engine',
      'ออกแบบและเขียนอัลกอริทึม'
    ],
    awards: 'เข้ารอบชิงชนะเลิศ NSC2025 ประเภทโปรแกรมเพื่อความบันเทิง (ได้รับทุน 10,000 บาท)',
    stack: ['Unity', 'MediaPipe', 'Python', 'Nomad']
  },
  { 
    id: '2', 
    title: 'Global Voices with AI', 
    category: ' AI',
    year: '2025',
    image: '/images/ai.png',
    description: 'ผู้ช่วยวิทยากร Global Voices with AI',
    fullDescription: 'สอนน้อง ๆ ให้รู้จักและเข้าใจพื้นฐานของเทคโนโลยีปัญญาประดิษฐ์ (AI) รวมถึงการใช้งานเครื่องมือต่าง ๆ เช่น ChatGPT  Gemini และ Claude เพื่อให้ผู้เรียนสามารถนำไปประยุกต์ใช้ได้อย่างเหมาะสม ผมคอยช่วยอธิบายหลักการทำงานของแต่ละเครื่องมือ พร้อมทั้งสาธิตวิธีการใช้งานจริง',
    responsibilities: [
      'อธิบายหลักการทำงานของแต่ละเครื่องมือ',
      'สาธิตวิธีการใช้งานจริง',
      'ตอบปัญหาน้องๆ'
    ],
    stack: ['Chat gpt', 'Gemini', 'claude', ]
  },
  { 
    id: '3', 
    title: 'Mini Aquarium', 
    category: 'IOT',
    year: '2025',
    image: '/images/iot.png',
    description: 'ตู้ปลาอัจฉริยะ เชื่อมต่อกับมือถือ',
    fullDescription: 'ระบบควบคุมและดูแลตู้ปลาอัตโนมัติ สามารถสั่งให้อาหาร เปิด-ปิดไฟ และตรวจสอบอุณหภูมิน้ำได้ผ่านแอปพลิเคชันบนมือถือ ช่วยให้ผู้เลี้ยงปลาสามารถดูแลปลาได้แม้อยู่นอกบ้าน',
    responsibilities: [
      'ออกแบบวงจร IoT',
      'เขียนโปรแกรมควบคุม Microcontroller',
      'สร้าง Mobile Application สำหรับควบคุม'
    ],
    awards: ' ได้รับรางวัลระดับเหรียญทอง กิจกรรมนวัตกรรมห้องเรียนพิเศษ',
    stack: ['Microblock Ide', 'Blynk', 'Kidbright32ip', ]
  },
];

export async function getAllProjects() {
  return projects;
}

export async function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}
