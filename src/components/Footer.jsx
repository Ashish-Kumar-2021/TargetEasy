import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Faculty', href: '/#faculty' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Results', href: '/#results' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-[#0b1121] text-gray-400 pt-20 pb-8 border-t-[6px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <a href="/" className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-lg cursor-pointer block">
                 <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain rounded-full" />
              </a>
              <div>
                <h3 className="text-white font-extrabold text-2xl tracking-tight">Target Easy</h3>
                <p className="text-blue-400 text-xs font-bold tracking-widest mt-1">(A vision)</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">Empowering students with quality education, expert guidance, and a foundation for a brighter future.</p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span> Quick Links
            </h4>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              {footerLinks.map((link, i) => (
                <a key={i} href={link.href} className="hover:text-secondary transition-colors duration-300 w-fit">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span> Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <a href="tel:+919380563478" className="flex items-start gap-4 group">
                <Phone size={20} className="text-gray-500 group-hover:text-secondary transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors">+91 9380563478</span>
              </a>
              <a href="mailto:ramkumarsah76ap@gmail.com" className="flex items-start gap-4 group">
                <Mail size={20} className="text-gray-500 group-hover:text-secondary transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors break-all">ramkumarsah76ap@gmail.com</span>
              </a>
              
              <a href="https://www.google.com/maps/place/TARGET+EASY+(Er.+Ram+sah)/@26.4345808,85.8993012,17z/data=!3m1!4b1!4m6!3m5!1s0x39ec4bcf40bcad73:0x6a5dcd3b812907d4!8m2!3d26.4345808!4d85.9018761!16s%2Fg%2F11t8c12gyw?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <MapPin size={20} className="text-gray-500 group-hover:text-secondary transition-colors" />
                <span className="group-hover:text-gray-300 transition-colors leading-relaxed">Kataiya Road, Benipatti<br/>Madhubani, Bihar</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span> Follow Us
            </h4>
            <div className="flex space-x-4">
              
              <a href="https://www.facebook.com/ramsah6549/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              
              <a href="https://www.youtube.com/@targeteasybenipatti" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>

              <a href="https://wa.me/919380563478" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>

              <a href="https://www.justdial.com/Madhubani/Target-Easy-Benipatti/9999P6276-6276-230827204052-X1K6_BZDET" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontWeight="900" fontSize="16" fontFamily="Arial, sans-serif">Jd</text>
                </svg>
              </a>

            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© {new Date().getFullYear()} Target Easy - (A vision). All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 tracking-wider text-gray-500">
            <span className="text-gray-300">Learn Today</span> <span className="text-secondary mx-2">|</span> <span className="text-gray-300">Lead Tomorrow</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;