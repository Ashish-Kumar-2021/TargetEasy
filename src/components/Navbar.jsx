import { useState, useEffect } from 'react';
import { Phone, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Faculty', href: '/#results' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Results', href: '/#results' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed w-full z-50 top-0 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2 border-b border-gray-100" 
          : "bg-white py-4 border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group cursor-pointer">
            <img 
              src="/logo.jpg" 
              alt="Target Easy Logo" 
              className={cn("w-auto transition-all duration-300", isScrolled ? "h-12" : "h-14")} 
            />
            <div className="ml-3 hidden md:block">
              <h1 className="text-primary font-extrabold text-xl leading-tight group-hover:text-secondary transition-colors duration-300">Target Easy</h1>
              <p className="text-gray-500 text-xs font-medium tracking-wide">(A vision)</p>
            </div>
          </a>

          {/* Links */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                className="relative text-gray-700 hover:text-primary font-medium text-sm group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full w-0"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-secondary text-white px-7 py-2.5 rounded-full font-semibold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 flex items-center gap-2 cursor-pointer inline-flex"
            >
              <Phone size={16} /> Enquire Now
            </motion.a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button className="text-gray-600">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;